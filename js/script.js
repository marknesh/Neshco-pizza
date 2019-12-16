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
  alert(pizza.size)
$(".hide").show()
var smallPrice=500
var mediumPrice=1000
var largePrice=2500
if(pizzaSize=="small")
$(".showCheckout").text(smallPrice);

else if(pizzaSize=="medium")
$(".showCheckout").text(mediumPrice)


else (pizzaSize=="large")
$(".showCheckout").text(largePrice)

var crispyPrice=100
var stuffedPrice=200
var gluttenPrice=300
if(pizzaCrust=="crispy")
$(".showCrust").text(crispyPrice)
var beef=40
var pineapple=50
var beacon=60




if(pizzaTopping=="beef" &&pizzaSize=="small")
$(".showBeef").text(beef)
$(".titleBeef").show()




if(pizzaTopping=="beef" &&pizzaSize=="medium")
$(".showBeef").text(beef)
$(".titleBeef").show()


if(pizzaTopping=="beef" &&pizzaSize=="large")
$(".showBeef").text(beef)
$(".titleBeef").show()


if(pizzaTopping=="pineapple" &&pizzaSize=="small")
$(".showPineapple").text(pineapple)
$(".titlePineapple").show()


if(pizzaTopping=="pineapple" &&pizzaSize=="medium")
$(".showPineapple").text(pineapple)
$(".titlePineapple").show()



if(pizzaTopping=="pineapple" &&pizzaSize=="large")
$(".showPineapple").text(pineapple)
$(".titlePineapple").show()


if(pizzaTopping=="beacon" &&pizzaSize=="small")
$(".showBeacon").text(beacon)
$(".titleBeacon").show()


if(pizzaTopping=="beacon" &&pizzaSize=="medium")
$(".showBeacon").text(beacon)
$(".titleBeacon").show()



if(pizzaTopping=="beacon" &&pizzaSize=="large")
$(".showBeacon").text(beacon)
$(".titleBeacon").show()










})

 
  
  

