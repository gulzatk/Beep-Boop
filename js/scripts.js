function numberReplace(number) {
  var newNumber = "";

    if (number === 0) {
      return "Beep!"

  } else if (number === 1) {
     return "Boop!"
  } else if (number === 3) {
      return "I am sorry, Dave. I am arfaid I can't to that."

  } else {
    return number
  }
  }













// // User Interface
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

     var number = parseInt($("input#num").val());
     var result = numberReplace(number);

  $("#output").text(result);
  });
});
