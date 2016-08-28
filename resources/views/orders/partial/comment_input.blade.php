<div class="modal-content">
    <div class="modal-header">
        <button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
        <h6>{{ trans('store.create_comment_modal.create_comment') }}{{$order_id}}</h6>
    </div>

    <form ng-submit="commentOrderForm.$valid && commentOrder({{$order_id}})" xt-form role="form" name="commentOrderForm" novalidate>
        <div class="modal-body">
            <div class="container-fluid">
                    {!! Form::hidden('order_id', $order_id, ['ng-model'=>'newComment.order_id']) !!}
                    <div class="row">
                        <div class="col-md-12">
                        {!! Form::label('comment_text',trans('store.create_comment_modal.text').':', ['class'=>'control-label']) !!}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            {!! Form::textarea(
                                    'comment_text', null,
                                    [
                                        'id' => 'comment_text',
                                        'rows' => 3,
                                        'class' => 'form-control form-group',
                                        'ng-model' => 'newComment.comment_text',
                                        'required' => 'required',
                                        'placeholder' => trans('store.create_comment_modal.create_comment_placeholder')
                                    ]
                                )
                            !!}
                            <xt-validation-inline for="comment_subject"></xt-validation-inline>
                        </div>
                    </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="submit" class="btn btn-sm btn-primary pull-left">{{ trans('store.create_comment_modal.save_new_comment') }}</button>
        </div>
    </form>

</div>