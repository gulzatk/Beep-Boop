function numberReplace(number) {
   var newString = number.toString();
    // var newString = number.split();
  var newNumber = [];

    if (newString.includes("0")) {
     newNumber.push("Beep!");

  } if (newString.includes("1")) {
 newNumber.push("Boop!");

} else if (newString%3===0 && newString !==0) {
 newNumber.push("I am sorry, Dave. I am arfaid I can't to that.");

   } else {
 newNumber.push(" " + newString);  }

  return newNumber

}
// // User Interface
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

     var number = parseInt($("#num").val());

      var result = numberReplace(number);

  $("#output").text(result);

  });
});
