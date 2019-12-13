//business logic

function Pizza(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = [];
}



function Topping(pineapple, beacon,beef) {
  this.pineapple =pineapple;
  this.beacon = beacon;
  this.beef = beef
}



//user interface logic

$("form").submit(function(){
  event.preventDefault();
  var  pizzaSize = $("#size").val()
  var pizzaCrust = $("#crust").val()
  var pizza=new Pizza(pizzaSize,pizzaCrust,pizzaTopping)


  
  
   
  
  
  
})
  