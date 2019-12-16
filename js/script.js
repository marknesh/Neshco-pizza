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

var smallPrice=500
var mediumPrice=1000
var largePrice=2500
if(pizzaSize=="small")
$(".showCheckout").text(smallPrice);

 if(pizzaSize=="medium")
$(".showCheckout").text(mediumPrice)


if(pizzaSize=="large")
$(".showCheckout").text(largePrice)

var crispyPrice=200
var stuffedPrice=200
var gluttenPrice=300
if(pizzaCrust=="crispy")
$(".showCrust").text(crispyPrice)
var beef=40
var pineapple=50
var beacon=60




if(pizzaSize=="small" &&pizzaTopping=="beef"  &&pizzaCrust=="crispy"){
$(".showBeef").text(beef)
$(".titleBeef").show()
$(".total").text(smallPrice+crispyPrice+beef);return}




if(pizzaTopping=="beef" &&pizzaSize=="medium" &&pizzaCrust=="crispy"){
$(".showBeef").text(beef)
$(".titleBeef").show()
$(".total").text(mediumPrice+crispyPrice+beef)}


if(pizzaTopping=="beef" &&pizzaSize=="large"){
$(".showBeef").text(beef)
$(".titleBeef").show()
$(".total").text(largePrice+crispyPrice+beef)}


if(pizzaSize=="small" &&pizzaTopping=="pineapple"&&pizzaCrust=="crispy"){
$(".showPineapple").text(pineapple)
$(".titlePineapple").show()
$(".total").text(smallPrice+pineapple+crispyPrice)}



if(pizzaTopping=="pineapple" &&pizzaSize=="medium"){
$(".showPineapple").text(pineapple)
$(".titlePineapple").show()}



if(pizzaTopping=="pineapple" &&pizzaSize=="large"){
$(".showPineapple").text(pineapple)
$(".titlePineapple").show()}


if(pizzaSize=="small"&&pizzaTopping=="beacon" &&pizzaCrust=="crispy"){
$(".showBeacon").text(beacon)
$(".titleBeacon").show()
$(".total").text(smallPrice+beacon +crispyPrice)}


if(pizzaTopping=="beacon" &&pizzaSize=="medium"){
$(".showBeacon").text(beacon)
$(".titleBeacon").show()}



if(pizzaTopping=="beacon" &&pizzaSize=="large"){
$(".showBeacon").text(beacon)
$(".titleBeacon").show()}


  



})

 
  
  

