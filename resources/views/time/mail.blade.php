@extends('layouts.master')

@section('title')@parent - {{ trans('globals.home') }} @stop

@include('partial.message')

@section('content')

    <section class="get-time">
        <div class="container ">
            <div class="row"> 
            <br><br>
                <div class="col-md-12 get-time" >
                    <h3>Цаг авах</h3>
                </div><br>      
<!--                <form action="{{ route('times.store') }}" class="time-form" method="post">          
 -->
                <form action="{{ url('tsag') }}" method="POST">
                    {{ csrf_field() }}
                         
                   
                    <div class="col-sm-4">
                        <div class="form-group">    
                            <select class="form-control" id="" name="subject" placeholder="Үйлчилгээ">
                                <option>Bella</option>
                                <option>Артист</option>
                            </select><br>                       
                            <select class="form-control" id="service"  name="service" placeholder="Үйлчилгээ">
                                <option>Үйлчилгээ</option>
                                <option>Гоёлын будалт</option>
                                <option>Энгийн будалт</option>
                                <option>Хуримын будалт</option>
                                <option>Хуримын багц</option>
                                <option>Express будалт</option>
                                <option>Хөмсөг засалт</option>
                                <option>Хөмсөг Henna</option>
                                <option>Хөмсөг будалт</option>
                                <option>Суурь тавилт</option>
                                <option>Контур тавилт</option>
                                <option>Уруулын будалт</option>
                                <option>Сормуус наах</option>
                                <option>Хөмсөг тийнт</option>
                                <option>Тень тавих</option>
                                <option>Смоки будалт</option>                               
                                <option>Арьс цэвэрлэх</option>
                                <option>Маск тавих</option>
                                <option>Арьс чийгшүүлэх</option>
                            </select><br>
                            <div class='input-group date' id='datetimepicker1'>
                                <input type='text' class="form-control" name="service_time" placeholder="Он сар өдөр" />
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                                              
                            
                        </div>
                    </div>
                    <div class="col-sm-4"> 
                        <div class="form-group">                        
                                              
                            <input type="text" class="form-control" id="user-name" name="userName" placeholder="Нэрээ оруулна уу."><br>

                             <input type="number" class="form-control" id="user-phone" name="userNumber" data-bind="value:replyNumber" placeholder="Дугаараа оруулна уу." /><br>
                             <input type="text" class="form-control" id="service-addition" name="email" placeholder="Email оруулна уу."><br>

                             
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <textarea class="form-control description" rows="5" id="description" name="message" placeholder="Тайлбар бичнэ үү"></textarea>                   
                    </div><br>
                    <div class="col-md-12 get-time" >
                        <div class="btn-group pull-right ">
                             <button class="btn btn-info get-time-btn" type="submit">
                             Авах
                             </button> 
                         </div>
                    </div><br>
                </form>

          </div>
        </div><br>

    </section>
  

@stop {{-- end content --}}
