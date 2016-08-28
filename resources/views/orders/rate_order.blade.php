<div class="modal-content rate_order">
    <div class="modal-header">
        <button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
        <h6 class="modal-title">
            {{ str_replace('[order]', $order->id, trans('store.order_rate_view.title_modal')) }}
            &nbsp;-&nbsp;
            {{ trans('store.order_rate_view.sold_by') }}:&nbsp;{{ ucwords($business->business_name)  }}
        </h6>
        <small ng-hide = "processing_petition == ''">[[processing_petition]]</small>
    </div>
    
    <div class="modal-body">
        <div class="row">
            <div class="col-md-12 col-xs-12">
                @include('partial.message')

                <div class="row" ng-show="message!=''">
                    <div class="col-lg-12">
                        <div class="alert alert-success [[messageClass]]" role="alert">[[message]]</div>
                    </div>
                </div>

                {{-- rate order form --}}
                    
                @if ($order->rate == '' || $order->rate == 0)
                    <div class="row">
                         <div class="col-md-12">
                            <label>{{ trans('store.order_rate_view.rate_this_seller') }}:</label>&nbsp;
                            <rating
                                max = "5"
                                state-on = "'fui-heart'"
                                state-off = "'fui-cross'"
                                readonly = "false"
                                ng-model = "busissnes.rate_val"
                            ></rating>
                        </div>
                    </div>
                
                    <div class="row">
                        <div class="col-md-12">
                            <label>{{ trans('store.order_rate_view.leave_comment') }}:</label>&nbsp;
                            <textarea
                                rows = "2"
                                class = "form-control"
                                placeholder = ""
                                ng-model = "busissnes.comment"></textarea>
                        </div>
                    </div>
                
                    <div class="row">&nbsp;</div>

                    <div class="row">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-primary pull-right" ng-init="isDisabled = false" ng-disabled="isDisabled" ng-click="rateSeller('{{$order->id}}')">{{ trans('store.order_rate_view.save_rate') }}</button>
                        </div>
                    </div>
                
            
                    <div class="row">
                        <div class="col-md-12">
                            <h6>
                                {{ str_replace('[order]', $order->id, trans('store.order_rate_view.title_detail')) }}
                            </h6>
                        </div>
                    </div>
                    
                    <hr>
                    
                    <div class="row">
                         @foreach ($order->details as $detail)
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 clearfix">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object img-rounded" style ="width: 50px; height: 50px;" ng-src="{{ $detail->product->features['images'][0] }}" alt="{{ $detail->product->name }}">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <label class="rateHeightLabel">{{ $detail->product->name }}</label>
                                        @if (trim($detail->rate) == '')
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>{{ trans('store.order_rate_view.rate_this_seller') }}:</label>&nbsp;
                                                    <rating max="5" state-on="'fui-heart'" state-off="'fui-cross'" id="rate_{{ $detail->product_id }}" readonly="false" ng-model="ratingOrdItems.rate_{{ $detail->product_id }}"></rating>
                                                    <textarea
                                                        rows = "1"
                                                        id = "comment_{{ $detail->product_id }}"
                                                        class = "form-control input-sm"
                                                        placeholder = "{{ trans('store.order_rate_view.leave_comment') }}"
                                                        ng-model="ratingOrdItems.comment_{{ $detail->product_id }}">{{ $detail->rate_comment }}</textarea>
                                                </div>
                                            </div>
                                            <div class="row">&nbsp;</div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    {{ $detail->rate }}
                                                    <button type="button" id = "btn_{{ $detail->product_id }}" class="btn btn-xs btn-primary pull-left" ng-click="rateProduct('{{$detail->id}}', '{{ $detail->product_id }}')">{{ trans('store.order_rate_view.save_prod_rate') }}</button>
                                                </div>
                                            </div>
                                        @else
                                            <br>
                                            <small>
                                                <label>{{ trans('store.order_rating_value') }}:</label>&nbsp;
                                                {{ Utility::showRate($detail->rate) }}
                                            </small>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @endif
                
            </div>
        </div>
    </div>
</div>