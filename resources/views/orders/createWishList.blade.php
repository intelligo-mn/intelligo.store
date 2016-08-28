@if(isset($productId))
    <form ng-submit="createListForm.$valid && createList({{ $productId }})" name="createListForm" novalidate>
@else
    <form ng-submit="createListForm.$valid && createList()" name="createListForm" novalidate>
@endif

<div class="modal-content">
    
    <div class="modal-header">
        <button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
        <h6 class="modal-title">{{ trans('store.CreateWishList') }}</h6>
    </div>
    
    <div class="modal-body" stop-event="touchend">
            
            <div class="row">
                <div class="col-md-12">
                    
                    {!!
                        Form::textarea('description', null,
                        [
                            'rows' => 3,
                            'class' => 'form-control form-group',
                            'ng-model' => 'newList.description',
                            'required' => 'required',
                            'placeholder' => trans('store.form_create_list_view.description_placeholder').' ...'
                        ])
                    !!}
                        
                </div>
            </div>
        
    </div> {{-- modal body --}}

    <div class="modal-footer">
        <button type="submit" class="btn btn-success pull-left">{{ trans('store.form_create_list_view.save_wish_label') }}</button>
    </div>
    
</div>

</form>