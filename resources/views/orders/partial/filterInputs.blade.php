<div class="row container-fluid" ng-controller = "DataPickerCtrl" >
                   
    <div class="col-lg-12" style="background-color: #ECF0F1; padding: 5px; border-radius: 3px;">

        <label style="padding-bottom: 0px;">{{ trans('store.orders_filter_title') }}</label>
            
        <form method="POST" action="" name="ordersFilterForm" class="form-inline">

            <div class="input-group">
                <div class="input-group-addon input-sm">
                    <span class="glyphicon glyphicon-calendar"></span>
                </div>

                <input 
                    type="text" 
                    class="form-control input-sm"
                    id="dateFrom"
                    name="dateFrom"
                    style="width:150px;" 
                    datepicker-popup="yyyy-MM-dd"
                    ng-init = "dateFrom = '{{ $dateFrom }}'" 
                    ng-model="dateFrom" 
                    is-open="status.opened" 
                    close-text="{{ trans('globals.close_label') }}" 
                    ng-click="open($event)"
                    placeholder="{{ \Carbon\Carbon::now()->format('F j, Y') }}"
                />
            </div>
            
            <div class="row visible-md visible-xs visible-sm">&nbsp;</div>
            
            <div class="input-group">
                <div class="input-group-addon input-sm">
                    <span class="glyphicon glyphicon-calendar"></span>
                </div>
                
                <input 
                    type="text" 
                    class="form-control input-sm"
                    id="dateTo"
                    name="dateTo"
                    style="width:150px;" 
                    datepicker-popup="yyyy-MM-dd"
                    ng-init = "dateTo = '{{ $dateTo }}'" 
                    ng-model="dateTo" 
                    is-open="status2.opened" 
                    close-text="{{ trans('globals.close_label') }}" 
                    ng-click="open2($event)"
                    placeholder="{{ \Carbon\Carbon::now()->format('F j, Y') }}"
                    value="{{ $dateTo }}"
                />

            </div>
            
            <div class="row visible-md visible-xs visible-sm">&nbsp;</div>
            
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-sm">
                    <span class="glyphicon glyphicon-filter"></span>    
                    &nbsp;{{ trans('globals.filter_results') }}
                </button>
                <a href="{{ route('orders.report', ['type' => 'history', 'filter' => $filter]) }}" target="_blank" class="btn btn-info btn-sm">
                    <span class="glyphicon glyphicon-print"></span>    
                    &nbsp;{{ trans('globals.full_report') }}
                </a>
            </div>
        </form>

    </div>

</div>

<div class="row">&nbsp;</div>