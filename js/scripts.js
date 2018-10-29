// Business Logic

function calculateNumberValue(number) {
  var numberString = number.toString();
  var containsOne = numberString.includes("1");
  var containsZero = numberString.includes("0");
  var divisibleByThree = number != 0 && number % 3 === 0;

  if (divisibleByThree) {
    return ' "I am sorry. I am afraid I cannot do that." ';
  }

  if (containsOne) {
    return "Boop!";
  }

  if (containsZero) {
    return "Beep!";
  }

  return numberString;
}

function calculateValuesUpToNumber(number) {
  var result = "";
  for (var i = 0; i <= number; i++) {
    result += calculateNumberValue(i)  + "<br>";
  }

  return result;
}

// // User Interface
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var number = parseInt($("#num").val());

    $("#output").html(calculateValuesUpToNumber(number));
  });
});
