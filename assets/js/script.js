// Displays the current Date and Time.
var theDate = function(){
var currentTime = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var currentDay = document.querySelector("#currentDay")
currentDay.textContent = currentTime;
}

var timeBox = document.querySelector("time-block");




// Changes colors based on the current time.
var timeColor = function() {
    var currentTime = moment().hour();


$(".time-block").each(function(){
    var textArea = parseInt($(this).attr("id").split()[0]);
    // Add colors based on if statements
    if (textArea < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if  (textArea === currentTime){
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    } else
     {   $(this).removeClass("past");
          $(this).removeClass("present");
        $(this).addClass("future");
        
    }
  console.log(currentTime)
  })
   // Gets the localStorage and displays it based on the time.
$("#7am .description").val(localStorage.getItem("7am"));
$("#8am .description").val(localStorage.getItem("8am"));
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#13pm .description").val(localStorage.getItem("13pm"));
$("#14pm .description").val(localStorage.getItem("14pm"));
$("#15pm .description").val(localStorage.getItem("15pm"));
$("#16pm .description").val(localStorage.getItem("16pm"));
$("#17pm .description").val(localStorage.getItem("17pm"));


}

$(".saveBtn").on("click", function(){
    var textArea = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, textArea)
})









// Function that displays time.
theDate()
// Allows time to be realtime.
setInterval(theDate, 1000);
timeColor()
