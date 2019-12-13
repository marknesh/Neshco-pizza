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

function resetFields() {
  $("#size").val();
 $("#crust").val();
 $("input[type='checkbox']").val()

}



//user interface logic

$("form").submit(function(){
  event.preventDefault();
  var  pizzaSize = $("#size").val()
  var pizzaCrust = $("#crust").val()
  var pizzaTopping = $("input[type='checkbox']").val()
  var pizza=new Pizza(pizzaSize,pizzaCrust,pizzaTopping)


  alert("Please confirm that you have chosen a "+pizzaSize)

  
  
})
  