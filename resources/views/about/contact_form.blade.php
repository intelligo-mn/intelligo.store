<hr class="hidden-lg">
@include('partial.message')
{!! Form::open(array('route' => 'contact_store', 'class' => 'form-horizontal', 'id' => 'contact_store')) !!}
<fieldset>
    {!! Form::label(trans('about.type_of_request')) !!}: <br>
    <div class="row btn-group col-lg-12">

      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span id="kind">{{$kind_of_request['contact']}}</span>  <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
      @foreach($kind_of_request as $key => $kind)
        <li><a href="javascript:void(0)" onclick="$('#type_of_request').val('{{$key}}');$('#kind').html('{{$kind}}')">{{$kind}}</a></li>
      @endforeach
      </ul>
      <input type="hidden" name="type_of_request" id="type_of_request" value="contact">
    </div>

   <div class="form-group col-lg-6">
    {!! Form::label(trans('about.name')) !!}:
    {!! Form::text('name', null,['required','class'=>'form-control ','placeholder'=>trans('about.name_placeholder')]) !!}
  </div>
  <div class="form-group col-md-8">
    {!! Form::label(trans('about.email')) !!}:
    {!! Form::text('email', null,['required','class'=>'form-control','placeholder'=>trans('about.email_placeholder')]) !!}
  </div>
  <div class="form-group col-md-12">
    {!! Form::label(trans('about.message')) !!}:
    {!! Form::textarea('message', null, ['required','class'=>'form-control','rows'=>'3','placeholder'=>trans('about.message_placeholder')]) !!}
  </div>
  <div class="form-group col-md-12">
    {!! Form::submit(trans('about.contact_us'),['class'=>'btn btn-primary pull-right']) !!}
  </div>
</fieldset>
</from>