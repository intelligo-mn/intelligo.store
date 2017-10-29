/*!
 * See LICENSE in this repository for license information
 */
(function(){
'use strict';
'use strict';

/*jshint unused:false*/
var xtForm = angular.module('xtForm', []);
xtForm.directive('ngModel', ["xtFormConfig", "$rootScope", "$interpolate", "$document", function (xtFormConfig, $rootScope, $interpolate, $document) {
    'use strict';

    var UNTOUCHED_CLASS = 'ng-untouched',
        TOUCHED_CLASS = 'ng-touched';

    return {
        require: ['ngModel', '^?xtForm', '^?form'],
        link: function (scope, element, attrs, ctrls) {

            var defaultErrors = xtFormConfig.getErrorMessages(),
                ngModel = ctrls[0],
                xtForm = ctrls[1],
                form = ctrls[2],
                setTouchedFn,
                validationStrategyFn;

            /**
             * Active the directive
             */
            function activate() {

                setTouchedFn = ngModel.$setTouched || setTouchedPolyfill;
                validationStrategyFn = xtForm.getValidationStrategy();
                ngModel.$untouched = true;

                // add extensions to ngModel
                var labelEl = $document[0].querySelectorAll('label[for="' + attrs.id + '"]');
                angular.extend(ngModel, {
                    $focused: false,
                    $label: labelEl.length > 0 ? labelEl[0].innerText : '',
                    $xtErrors: []
                });

                // set errors on the ngModel when $error changes
                scope.$watch(function () {
                    return ngModel.$error;
                }, updateErrors, true);

                scope.$on('XtForm.ForceErrorUpdate', updateErrors);

                element
                    .on('focus', function () {
                        if (!ngModel.$touched) {
                            setTouchedFn();
                        }
                        ngModel.$focused = true;
                        updateErrors();
                        scope.$apply();
                    })
                    .on('blur', function () {
                        ngModel.$focused = false;
                        updateErrors();
                        scope.$apply();
                    });
            }

            function getErrorMessageForKey(key) {
                var attrKey = 'msg' + key[0].toUpperCase() + key.substring(1);

                // use either the provided string as an interpolated attribute, or the default message
                return attrs[attrKey] ?
                    attrs[attrKey] :
                    $interpolate(defaultErrors[key])(attrs);
            }

            /**
             * Sets the $xtErrors collection on validation change
             */
            function updateErrors() {
                ngModel.$xtErrors = [];

                angular.forEach(ngModel.$error, function (value, key) {
                    var showErrors = value && validationStrategyFn(form, ngModel);
                    if (showErrors) {
                        var error = {
                            key: key,
                            message: getErrorMessageForKey(key)
                        };

                        // This is a bit of hack right now to ensure that data type validation errors are shown
                        // in priority over the required message if both fail.
                        // TODO will likely need to introduce priorities of error messages
                        if (key === 'required') {
                            ngModel.$xtErrors.push(error);
                        } else {
                            ngModel.$xtErrors.unshift(error);
                        }
                    }


                });

                $rootScope.$broadcast('XtForm.ErrorsUpdated', ngModel);
            }

            // Polyfill for $touched in AngularJS < 1.3
            function setTouchedPolyfill() {
                ngModel.$touched = true;
                ngModel.$untouched = false;
                element.addClass(TOUCHED_CLASS).removeClass(UNTOUCHED_CLASS);
            }

            if (xtForm) {
                activate();
            }
        }
    };
}]);
xtForm
    .directive('xtForm', ["$timeout", function ($timeout) {
        'use strict';

        return {
            require: '',
            priority: -1,
            controller: 'XtFormController',
            controllerAs: 'xtForm',
            link: function (scope, element, attrs, xtForm) {
                element
                    .on('submit', function () {
                        scope.$apply(function () {
                            xtForm.submit();
                        });
                    })
                    .on('reset', function () {
                        $timeout(function () {
                            xtForm.reset();
                        });
                    });
            }
        };
    }])
    .controller('XtFormController', ["$scope", "$element", "$attrs", "xtFormConfig", "$window", function ($scope, $element, $attrs, xtFormConfig, $window) {
        'use strict';

        var vm = this,
            form = $element.controller('form'),
            validationStrategy = $attrs.strategy ?
                xtFormConfig.getValidationStrategy($attrs.strategy) :
                xtFormConfig.getDefaultValidationStrategy();

        //polyfill for setSubmitted pre 1.3
        function setSubmitted() {
            if (angular.isFunction(form.$setSubmitted)) {
                form.$setSubmitted();
                return;
            }
            form.$submitted = true;
            $element.addClass('ng-submitted');
        }

        function setUnsubmitted() {
            if (angular.isFunction(form.$setSubmitted)) {
                return;
            }
            form.$submitted = false;
            $element.removeClass('ng-submitted');
        }

        angular.extend(vm, {

            form: form,

            getValidationStrategy: function () {
                return validationStrategy;
            },

            tooltipTrigger: $attrs.tooltipTrigger,

            submit: function () {
                setSubmitted();

                // focus first error if required
                if (form.$invalid && $attrs.focusError) {
                    $window.setTimeout(function () {
                        $element.find('.ng-invalid:input:visible:first').focus();
                    });
                }

                $scope.$broadcast('XtForm.ForceErrorUpdate', null, 'submit');
            },

            reset: function () {
                vm.form.$setPristine();
                vm.form.$setUntouched();
                setUnsubmitted();

                $scope.$broadcast('XtForm.ForceErrorUpdate', null, 'reset');
            }

        });
    }]);
xtForm.provider('xtFormConfig', function () {
    'use strict';

    var self = this,
        _errors = {
            minlength: 'Needs to be at least {{ngMinlength}} characters long',
            maxlength: 'Can be no longer than {{ngMaxlength}} characters long',
            required: 'This field is required',
            number: 'Must be a number',
            min: 'Must be at least {{min}}',
            max: 'Must be no greater than {{max}}',
            email: 'Must be a valid E-mail address',
            pattern: 'Illegal value',
            url: 'Must be a valid URL',
            date: 'Must be a valid date',
            datetimelocal: 'Must be a valid date',
            time: 'Must be a valid time',
            week: 'Must be a valid week',
            month: 'Must be a valid month',
            $$server: 'An error has occurred'
        },
        _validationStrategyFn;

    angular.extend(self, {

        $validationStrategies: {
            invalid: function (form) {
                return form.$invalid;
            },
            submitted: function (form) {
                return form.$invalid && form.$submitted;
            },
            dirty: function (form, ngModel) {
                return ngModel.$invalid && ngModel.$dirty;
            },
            dirtyOrSubmitted: function (form, ngModel) {
                return ngModel.$invalid && (form.$submitted || ngModel.$dirty);
            },
            focusedAndDirtyOrSubmitted: function (form, ngModel) {
                return ngModel.$invalid && (ngModel.$focused && (ngModel.$dirty || form.$submitted));
            },
            dirtyAndFocusedOrSubmitted: function (form, ngModel) {
                return ngModel.$invalid && (form.$submitted || (ngModel.$dirty && ngModel.$focused));
            }
        },

        addValidationStrategy: function (name, fn) {
            self.$validationStrategies[name] = fn;
        },

        setDefaultValidationStrategy: function (strategy) {
            if (!self.$validationStrategies[strategy]) {
                throw new Error('Could not find validation strategy by name: ' + strategy);
            }
            _validationStrategyFn = self.$validationStrategies[strategy];
        },

        setErrorMessages: function (errors) {
            angular.extend(_errors, errors);
        }

    });

    this.$get = function () {
        return {
            getErrorMessages: function () {
                return angular.copy(_errors);
            },
            getValidationStrategy: function (name) {
                if (!self.$validationStrategies[name]) {
                    throw new Error('Could not find validation strategy by name: ' + name);
                }
                return self.$validationStrategies[name];
            },
            getDefaultValidationStrategy: function () {
                return _validationStrategyFn;
            }
        };
    };

    self.setDefaultValidationStrategy('dirtyOrSubmitted');
});
xtForm.directive('xtValidationInline', ["$templateCache", function ($templateCache) {
    'use strict';

    var _uniqueIdCounter = 0;

    function nextUniqueId() {
        return 'validation_' + _uniqueIdCounter++;
    }

    return {
        require: ['^xtForm'],
        restrict: 'EA',
        scope: true,
        replace: true,
        template: function (element, attrs) {
            return $templateCache.get(attrs.templateUrl || 'xtForm/inline/validationInline.html');
        },
        link: function (scope, element, attrs) {

            var inputId = attrs['for'] || attrs.xtValidationInline;
            if (angular.isUndefined(inputId)) {
                throw new Error('The validation input id must be specified eg. for="id"');
            }

            var inputEl = angular.element(document.getElementById(inputId));
            if (inputEl.length === 0) {
                throw new Error('Can not find input element for the validation directive');
            }

            var ngModel = inputEl.controller('ngModel');

            /**
             * Activates the directive
             */
            function activate() {
                element.addClass('xt-validation-inline');

                // Ensure the validation control has an id
                if (!attrs.id) {
                    attrs.id = nextUniqueId();
                    element.attr('id', attrs.id);
                }

                // Add aria attribute to denote required state
                if (!!inputEl.attr('required')) {
                    inputEl.attr('aria-required', true);
                }

                // Subscribe to "errors updated" event and redraw errors when changed
                scope.$on('XtForm.ErrorsUpdated', function (message, model) {
                    if (model === null || model === ngModel) {
                        redrawErrors();
                    }
                });
            }

            /**
             * Will redraw error spans on the page when required
             */
            function redrawErrors() {
                var noOfErrors = attrs.multiple ? ngModel.$xtErrors.length : 1;
                scope.errors = ngModel.$xtErrors.slice(0, noOfErrors);
                scope.showErrors = scope.errors.length > 0;
                toggleAriaAttributes(scope.showErrors);
            }

            /**
             * Toggle aria attributes to denote validity state
             * @param showErrors true to add error state
             */
            function toggleAriaAttributes(showErrors) {
                if (showErrors) {
                    inputEl
                        .attr('aria-invalid', true)
                        .attr('aria-describedby', attrs.id);
                } else {
                    inputEl.removeAttr('aria-invalid');
                    inputEl.removeAttr('aria-describedby');
                }
            }

            activate();
        }
    };
}]);
xtForm.directive('xtValidationSummary', ["$templateCache", function ($templateCache) {
    'use strict';

    return {
        require: ['^xtForm', '^form'],
        restrict: 'EA',
        replace: true,
        scope: true,
        template: function (element, attrs) {
            return $templateCache.get(attrs.templateUrl || 'xtForm/summary/validationSummary.html');
        },
        link: function (scope, element, attrs, ctrls) {

            var form = ctrls[1];
            scope.showLabel = (attrs.showLabel === 'true') || angular.isUndefined(attrs.showLabel);

            function redrawErrors() {

                scope.errors = [];
                angular.forEach(form, function (ngModel, ngModelKey) {
                    if (ngModelKey[0] !== '$') {

                        // can show one error for each input, or multiple
                        var noOfErrors = attrs.multiple ? ngModel.$xtErrors.length : 1,
                            errors = ngModel.$xtErrors.slice(0, noOfErrors);

                        angular.forEach(errors, function (value) {
                            scope.errors.push({
                                key: value.key,
                                label: ngModel.$label,
                                message: value.message
                            });
                        });
                    }
                });

                scope.showErrors = scope.errors.length > 0;
            }

            scope.$on('XtForm.ErrorsUpdated', redrawErrors);
        }
    };
}]);
xtForm.directive('xtValidationTooltip', function () {
    'use strict';

    return {
        require: ['^xtForm', '^ngModel'],
        restrict: 'EA',
        link: function (scope, element, attrs, ctrls) {

            var xtForm = ctrls[0];
            var ngModel = ctrls[1];

            var ngModelElement;
            var lastErrors;

            /**
             * Activates the directive
             */
            function activate() {

                setupNgModel();
                setupTooltipElement();

                // Subscribe to "errors updated" event and redraw errors when changed
                scope.$on('XtForm.ErrorsUpdated', function (message, model) {
                    if (model === null || model === ngModel) {
                        redrawErrors();
                    }
                });
            }

            function setupTooltipElement() {

                element.addClass('xt-error-container');

                // default SELECT tooltip placement to top
                if (element[0].nodeName.toUpperCase() === 'SELECT' && !attrs.placement) {
                    attrs.placement = 'top';
                    element.attr('placement', attrs.placement);
                }

                element.tooltip({
                    animation: false,
                    html: true,
                    placement: attrs.placement || 'bottom',
                    trigger: xtForm.tooltipTrigger || 'manual',
                    container: attrs.container || 'body'
                });
            }

            function setupNgModel() {

                // allow for a different tooltip container that is not on the ngModel element
                var ngModelElementId = attrs['for'] || attrs.xtValidationTooltip;
                ngModelElement = ngModelElementId ?
                    angular.element(document.getElementById(ngModelElementId)) :
                    element;

                ngModelElement.addClass('xt-validation-tooltip');

                if (!!ngModelElement.attr('required')) {
                    ngModelElement.attr('aria-required', true);
                }
            }

            function redrawErrors() {

                if (ngModel.$xtErrors.length === 0) {
                    lastErrors = null;
                    element.tooltip('hide');
                    return;
                }

                // hmm reduce adds br to front of string..
                var noOfErrors = attrs.multiple ? ngModel.$xtErrors.length : 1;
                var errors = ngModel.$xtErrors
                    .slice(0, noOfErrors)
                    .map(function (value) {
                        return value.message;
                    })
                    .join('<br />');

                // only redraw if needed
                if (errors !== lastErrors) {
                    lastErrors = errors;

                    setTimeout(function () {
                        element
                            .attr('title', errors)
                            .tooltip('fixTitle')
                            .tooltip('show');
                    });
                }
            }

            if (!$ || !angular.isFunction($.fn.tooltip)) {
                throw new Error('xtform requires a jquery tooltip plugin, like bootstrap.js');
            }

            activate();
        }
    };
});

})();