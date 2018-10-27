
// Business Logic

function getNumberText(number) {
  var numberString = number.toString();
  var containsOne = numberString.includes("1");
  var containsZero = numberString.includes("0");
  var divisibleByThree = number != 0 && number % 3 === 0;

  if (divisibleByThree) {
    return ' "I am sorry, I am afraid I cannot do that." ';
  }

  if (containsOne) {
    return "Boop!";
  }

  if (containsZero) {
    return "Beep!";
  }

  return numberString;
}

// // User Interface
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

var name = $("input#name").val()
    var numberString = parseInt($("#num").val());
    var result = "";
    for (var i = 0; i <= numberString; i++) {
      result += getNumberText(i)  + "<br>";
    }

    $("#output").html(result);
  });
});
