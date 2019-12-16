//business logic

function Pizza(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

function Size(small, medium, large) {
  this.small= small;
  this.medium = medium;
  this.large = large;
}



function Topping(pineapple, beacon,beef) {
  this.pineapple =pineapple;
  this.beacon = beacon;
  this.beef = beef
}

function resetFields() {
  $("#size").val();
 $("#crust").val();
 $("#topping").val()

}



//user interface logic




$("form").submit(function(){
  event.preventDefault();  
  var  pizzaSize = $("#size").val()
  var pizzaCrust = $("#crust").val()
  var pizzaTopping = $("#topping").val()
  var pizza=new Pizza(pizzaSize,pizzaCrust,pizzaTopping)
  
$(".hide").show()
var sizePizza=parseInt($("#size option:selected").val())
$(".showCheckout").text(sizePizza)


var crustPrice =parseInt($("#crusta option:selected").val())
$(".showCrust").text(crustPrice)

 

var beef=parseInt($("input[name='topp']:checked").val())
var pineapple=parseInt($("input[name='top']:checked").val())
var beacon=parseInt($("input[name='to']:checked").val())






var delivery=parseInt($(".delivered :checked").val())
$(".deliveryFee").text(delivery)


var numberPizza=parseInt($("#total").val())

$(".showBeef").text((beef))
$(".showPineapple").text(pineapple)
$(".showBeacon").text(beacon)



 if(beef==40 && pineapple==50){
  $(".showBeacon").hide()
  $(".titleBeacon").hide()
  $(".total").text((sizePizza+crustPrice+beef+pineapple+delivery)*numberPizza)

}
var mbeef=(beef+20)

var mpineapple=(pineapple+20)

var mbeacon=(beacon+20)



var lbeef=(beef+30)
var lpineapple=(pineapple+30)

var lbeacon=(beacon+30)




if(sizePizza==1500){
  $(".showBeef").text(mbeef)
  $(".showPineapple").text(mpineapple)
  $(".showBeacon").text(mbeacon)}
  if(mbeef==60 && mpineapple==70){
    $(".showBeacon").hide()
    $(".titleBeacon").hide()
    $(".total").text((sizePizza+crustPrice+mbeef+mpineapple+delivery)*numberPizza)
  
  }
  if(sizePizza==2000){
    $(".showBeef").text(lbeef)
    $(".showPineapple").text(lpineapple)
    $(".showBeacon").text(lbeacon)
  
  }
  if(lbeef==70 && lpineapple==80){
    $(".showBeacon").hide()
    $(".titleBeacon").hide()
    $(".total").text((sizePizza+crustPrice+lbeef+lpineapple+delivery)*numberPizza);return
  
  }

if(beef==40 && pineapple==50){
  $(".showBeacon").hide()
  $(".titleBeacon").hide()
  $(".total").text((sizePizza+crustPrice+beef+pineapple+delivery)*numberPizza)

}

 if(beef==40&&beacon==60){
  $(".showPineapple").hide()
  $(".titlePineapple").hide()
  $(".total").text((sizePizza+crustPrice+beef+beacon+delivery)*numberPizza)

}
if(mbeef==60&&mbeacon==80){
  $(".showPineapple").hide()
  $(".titlePineapple").hide()
  $(".total").text((sizePizza+crustPrice+mbeef+mbeacon+delivery)*numberPizza)

}
if(lbeef==70 && lbeacon==90){
  $(".showPineapple").hide()
  $(".titlePineapple").hide()
  $(".total").text((sizePizza+crustPrice+lbeef+lbeacon+delivery)*numberPizza)

}
if(beacon==60&&pineapple==50)
{
  $(".showBeef").hide()
  $(".titleBeef").hide()
  $(".total").text((sizePizza+crustPrice+beef+pineapple+delivery)*numberPizza)
}

if(mbeacon==80&&mpineapple==70)
{
  $(".showBeef").hide()
  $(".titleBeef").hide()
  $(".total").text((sizePizza+crustPrice+mbeacon+mpineapple+delivery)*numberPizza)
}

if(lbeacon==90&&lpineapple==80)
{
  $(".showBeef").hide()
  $(".titleBeef").hide()
  $(".total").text((sizePizza+crustPrice+lbeacon+lpineapple+delivery)*numberPizza)
}










})







 
  
  
