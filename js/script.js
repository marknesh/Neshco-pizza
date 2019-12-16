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



$(".showBeef").text((beef))
$(".showPineapple").text(pineapple)
$(".showBeacon").text(beacon)


var numberPizza=parseInt($("#total").val())

$(".total").text((crustPrice+sizePizza)*numberPizza)





})

 
  
  
