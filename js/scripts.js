function numberReplace(number) {
   var newString = number.toString();
    var one = newString.includes("1");
    var zero = newString.includes("0")
  var newNumber = [];

for (i = 0; i<= newString; i++) {
  newNumber.push(i);
  if (zero === true && one === false) {
     newNumber[i] = "Beep!";

  } else if (one === true) {
    newNumber[i] = "Boop!";

} else if (newString.includes("3")) {
 newNumber[i] = "I am sorry, Dave. I am arfaid I can't to that.";

   } else {
 newNumber[i] =  " " + newString;
  }
}
  return newNumber;

}
// // User Interface
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

     var number = parseInt($("#num").val());

      var result = numberReplace(number);
      // var finalResult = "";
      // for (i = 0; i < result.length; i++);
      // finalResult += result[i];

  $("#output").text(result);

  });
});
