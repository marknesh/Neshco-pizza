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
var cheese=parseInt($("input[name='cheese']:checked").val())






var delivery=parseInt($(".delivered :checked").val())
$(".deliveryFee").text(delivery)

if($("input#yes").is(':checked')){var sasa=prompt("Please enter your location")&&alert("Your delicious pizza will be delivered to you shortly after you checkout")}



var numberPizza=parseInt($("#total").val())

$(".showBeef").text((beef))
$(".showPineapple").text(pineapple)
$(".showBeacon").text(beacon)



var mbeef=(beef+20)

var mpineapple=(pineapple+20)

var mbeacon=(beacon+20)

var mcheese=(cheese+20)



var lbeef=(beef+30)
var lpineapple=(pineapple+30)

var lbeacon=(beacon+30)
var lcheese=(cheese+30)


if(sizePizza==500)
{$(".showBeef").text(beef)
$(".showBeacon").text(beacon)
$(".showPineapple").text(pineapple)
$(".showCheese").text(cheese)

}




if(sizePizza==1500){
  $(".showBeef").text(mbeef)
  $(".showPineapple").text(mpineapple)
  $(".showBeacon").text(mbeacon)
  $(".showCheese").text(mcheese)}
  if(lbeef==70 && lpineapple==80){
    $(".showBeacon").hide()
    $(".titleBeacon").hide()
    $(".total").text((sizePizza+crustPrice+lbeef+lcheese+lpineapple+delivery)*numberPizza);
  
  }
 if(mbeef==60 && mpineapple==70 ){
    $(".showBeacon").hide()
    $(".titleBeacon").hide()
    $(".total").text((sizePizza+crustPrice+mbeef+mcheese+mpineapple+delivery)*numberPizza);
    
  

 if(beef==40 && pineapple==50){
  $(".showBeacon").hide()
  $(".titleBeacon").hide()
  $(".total").text((sizePizza+crustPrice+beef+pineapple+delivery)*numberPizza);

}
  
  }
  if(sizePizza==2000){
    $(".showBeef").text(lbeef)
    $(".showPineapple").text(lpineapple)
    $(".showBeacon").text(lbeacon)
    $(".showCheese").text(lcheese)
  
  }
  if(lbeef==70 && lpineapple==80){
    $(".showBeacon").hide()
    $(".titleBeacon").hide()
    $(".total").text((sizePizza+crustPrice+lbeef+lcheese+lpineapple+delivery)*numberPizza);
  
  }

if(beef==40 && pineapple==50){
  $(".showBeacon").hide()
  $(".titleBeacon").hide()
  $(".total").text((sizePizza+crustPrice+beef+cheese+pineapple+delivery)*numberPizza);return

}

 if(beef==40&&beacon==60){
  $(".showPineapple").hide()
  $(".titlePineapple").hide()
  $(".total").text((sizePizza+crustPrice+cheese+beef+beacon+delivery)*numberPizza);

}
if(mbeef==60&&mbeacon==80){
  $(".showPineapple").hide()
  $(".titlePineapple").hide()
  $(".total").text((sizePizza+crustPrice+mbeef+mcheese+mbeacon+delivery)*numberPizza);

}
if(lbeef==70 && lbeacon==90){
  $(".showPineapple").hide()
  $(".titlePineapple").hide()
  $(".total").text((sizePizza+crustPrice+lbeef+lcheese+lbeacon+delivery)*numberPizza);

}
if(beacon==60 && pineapple==50)
{
  $(".showBeef").hide()
  $(".titleBeef").hide()
  $(".total").text((sizePizza+crustPrice+beacon+cheese+pineapple+delivery)*numberPizza);
}

if(mbeacon==80&&mpineapple==70)
{
  $(".showBeef").hide()
  $(".titleBeef").hide()
  $(".total").text((sizePizza+crustPrice+mbeacon+mcheese+mpineapple+delivery)*numberPizza);
}

if(lbeacon==90&&lpineapple==80)
{
  $(".showBeef").hide()
  $(".titleBeef").hide()
  $(".total").text((sizePizza+crustPrice+lbeacon+lcheese+lpineapple+delivery)*numberPizza);
}


if(beef==40 &&cheese)
{
  $(".showPineapple").hide()
  $(".titlePineapple").hide()
  $(".showBeacon").hide()
  $(".titleBeacon").hide()
  
  $(".total").text((sizePizza+crustPrice+beef+cheese+delivery)*numberPizza);
}
if(pineapple==50 &&cheese)
{
  $(".showBeef").hide()
  $(".titleBeef").hide()
  $(".showBeacon").hide()
  $(".titleBeacon").hide()
  $(".total").text((sizePizza+crustPrice+pineapple+cheese+delivery)*numberPizza);
}
if(beacon==60 &&cheese)
{
  $(".showPineapple").hide()
  $(".titlePineapple").hide()
  $(".showBeef").hide()
  $(".titleBeef").hide()
  $(".total").text((sizePizza+crustPrice+beacon+cheese+delivery)*numberPizza);}



})







 
  
  
