<?php
	include_once('config/database.php'); 
?>

<?php

	//Нийт ангилал
	$sql_category = "SELECT COUNT(*) as num FROM category";
	$total_category = mysqli_query($connect, $sql_category);
	$total_category = mysqli_fetch_array($total_category);
	$total_category = $total_category['num'];


	$sql_product = "SELECT COUNT(*) as num FROM product";
	$total_product = mysqli_query($connect, $sql_product);
	$total_product = mysqli_fetch_array($total_product);
	$total_product = $total_product['num'];


    $sql_company = "SELECT COUNT(*) as num FROM brand";
    $total_company = mysqli_query($connect, $sql_company);
    $total_company = mysqli_fetch_array($total_company);
    $total_company = $total_company['num'];

?>


    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>Удирдлагын хэсэг</h2>
            </div>

            <!-- Widgets -->
            <div class="row clearfix">
            
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box bg-orange hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">person_add</i>
                        </div>
                        <div class="content">
                            <div class="text">ХЭРЭГЛЭГЧИД</div>
                            <div class="number count-to" data-from="0" data-to="1" data-speed="1000" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box bg-light-green hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">polymer</i>
                        </div>
                        <div class="content">
                            <div class="text">СЭРВЭСҮҮД</div>
                            <div class="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box bg-pink hover-expand-effect">
                        <div class="icon">
                           <i class="material-icons">attach_money</i>
                        </div>
                        <div class="content">
                            <div class="text">ТӨЛБӨР</div>
                            <div class="number count-to" data-from="0" data-to="<?php echo $total_category;?>" data-speed="15" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box bg-cyan hover-expand-effect">
                        <div class="icon">
                            <i class="material-icons">settings</i>
                        </div>
                        <div class="content">
                            <div class="text">ТОХИРГОО</div>
                            <div class="number count-to" data-from="0" data-to="<?php echo $total_product;?>" data-speed="1000" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="block-header">
                <h2>
                    Онлайн худалдааны апп
                </h2>
            </div>
            <!-- Counter Examples -->
            <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <div class="icon bg-red">
                            <i class="material-icons">shopping_cart</i>
                        </div>
                        <div class="content">
                            <div class="text">Захиалгууд</div>
                            <div class="number count-to" data-from="0" data-to="125" data-speed="1000" data-fresh-interval="20">125</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <div class="icon bg-indigo">
                            <i class="material-icons">store</i>
                        </div>
                        <div class="content">
                            <div class="text">Дэлгүүрүүд</div>
                            <div class="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20">257</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <div class="icon bg-purple">
                            <i class="material-icons">loyalty</i>
                        </div>
                        <div class="content">
                            <div class="text">Ангилал</div>
                            <div class="number count-to" data-from="0" data-to="117" data-speed="1000" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <div class="icon bg-deep-purple">
                            <i class="material-icons">favorite</i>
                        </div>
                        <div class="content">
                            <div class="text">Бүтээгдэхүүнүүд</div>
                            <div class="number count-to" data-from="0" data-to="1432" data-speed="1500" data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block-header">
                <h2>Хүүхдийн төлөө апп</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box-4 hover-zoom-effect">
                        <div class="icon">
                            <i class="material-icons col-pink">email</i>
                        </div>
                        <div class="content">
                            <div class="text">Зурвас</div>
                            <div class="number">15</div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box-4 hover-zoom-effect">
                        <div class="icon">
                            <i class="material-icons col-blue">account_balance</i>
                        </div>
                        <div class="content">
                            <div class="text">Байгууллагууд</div>
                            <div class="number">92</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box-4 hover-zoom-effect">
                        <div class="icon">
                            <i class="material-icons col-light-blue">event</i>
                        </div>
                        <div class="content">
                            <div class="text">Үйл ажиллагаа</div>
                            <div class="number">5</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box-4 hover-zoom-effect">
                        <div class="icon">
                            <i class="material-icons col-cyan">gps_fixed</i>
                        </div>
                        <div class="content">
                            <div class="text">Байршилаар</div>
                            <div class="number"></div>
                        </div>
                    </div>
                </div>
              
            </div>
              
                <div class="block-header">
                <h2>Аялалын систем</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box-2 bg-pink hover-zoom-effect">
                        <div class="icon">
                            <i class="material-icons">local_offer</i>
                        </div>
                        <div class="content">
                            <div class="text">Аялалын төрөл</div>
                            <div class="number">15</div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box-2 bg-blue hover-zoom-effect">
                        <div class="icon">
                           <i class="material-icons">store_mall_directory</i>
                        </div>
                        <div class="content">
                            <div class="text">Аялалын компани</div>
                            <div class="number">92</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box-2 bg-light-blue hover-zoom-effect">
                        <div class="icon">
                            <i class="material-icons">map</i>
                        </div>
                        <div class="content">
                            <div class="text">Аялалууд</div>
                            <div class="number">453</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box-2 bg-cyan hover-zoom-effect">
                        <div class="icon">
                            <i class="material-icons">place</i>
                        </div>
                        <div class="content">
                            <div class="text">Газарууд</div>
                            <div class="number">126</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- #END# Widgets -->
            <!-- CPU Usage -->
            <div class="row clearfix">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="header">
                            <div class="row clearfix">
                                <div class="col-xs-12 col-sm-6">
                                    <h2>Сэрвэрийн ажиллагаа (%)</h2>
                                </div>
                                <div class="col-xs-12 col-sm-6 align-right">
                                    <div class="switch panel-switch-btn">
                                        <span class="m-r-10 font-12">REAL TIME</span>
                                        <label>OFF<input type="checkbox" id="realtime" checked><span class="lever switch-col-cyan"></span>ON</label>
                                    </div>
                                </div>
                            </div>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Тохиргоо</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div id="real_time_chart" class="dashboard-flot-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- #END# CPU Usage -->
            
        </div>
    </section>