//BY LATIF


// Set the date we're counting down to
var countDownDate = new Date("04 04, 2021 0:0:0").getTime();

// Update the count down every 1 second
function chek (){

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

setTimeout(chek);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";

  // If the count down is finished, write some text
  if (distance < 0) {
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}
