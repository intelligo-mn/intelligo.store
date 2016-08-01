/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  "use strict";

  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

  //bootstrap WYSIHTML5 - text editor
  $(".textarea").wysihtml5();

  /* Morris.js Charts */
  // news chart


  getdataline('news');

  $('.box-line-get').on('click', function () {

    var typene=$(this).attr('data-type');

      getdataline(typene);

  });

function getdataline(typene){

  $('#news-chart').html("");

  $('.lineloader').show();
    if(typene == 'news'){
      var elementne='news-chart';
      var labelsne=['News'];
      var urlne= "?type=news";

    }else if(typene == 'lists'){
      var elementne='news-chart';
      var labelsne=['Lists'];
      var urlne= "?type=list";

    }else if(typene == 'polls'){
      var elementne='news-chart';
      var labelsne=['Polls'];
      var urlne= "?type=poll";

    }else if(typene == 'videos'){
      var elementne='news-chart';
      var labelsne=['Videos'];
      var urlne="?type=video";

    }

  var area = new Morris.Line({
    element: elementne,
    resize: true,
    data: [{date: '0', news: 0}], // Set initial data (ideally you would provide an array of default data)
    xkey: 'date', // Set the key for X-axis
    ykeys: ['news'], // Set the key for Y-axis
    labels: labelsne,
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });


  $.ajax({
    type: "GET",
    dataType: 'json',
    url:"/admin/reports/last30news"+urlne, // This is the URL to the API
    data: { days: 30 }, // Passing a parameter to the API to specify number of days
    success: function(data) {

      area.setData(data);
      $('.lineloader').hide();
    }
  });

}



  var users = new Morris.Line({
    element: "user-chart",
    resize: true,
    data: [{date: '0', value: 0}], // Set initial data (ideally you would provide an array of default data)
    xkey: 'date', // Set the key for X-axis
    ykeys: ['value'], // Set the key for Y-axis
    labels: ['User'],
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });

  $.ajax({
    type: "GET",
    dataType: 'json',
    url:"/admin/reports/last30dayusers", // This is the URL to the API
    data: { days: 30 }, // Passing a parameter to the API to specify number of days
    success: function(data) {

      users.setData(data);

    }
  });





  //Donut Chart
  var donut = new Morris.Donut({
    element: 'sales-chart',
    resize: true,
    colors: ["#3c8dbc", "#00a65a", "#f39c12", "#f56954"],
    data: [
      {label: "none", value: 0}],
    hideHover: 'auto',
    gridTextFamily: "Open Sans",
    gridLineColor: '#00c0ef',
  });
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: "/admin/reports/last30SPOTStotal", // This is the URL to the API
    data: { days: 30 }, // Passing a parameter to the API to specify number of days
    success: function(data) {
      donut.setData(data);
    }
  });
  $('.box-donut-get').on('click', function () {
  });

  //Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });

  /* The todo list plugin */
  $(".todo-list").todolist({
    onCheck: function (ele) {
      window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele) {
      window.console.log("The element has been unchecked");
      return ele;
    }
  });

});
