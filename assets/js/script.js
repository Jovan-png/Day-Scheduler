var theDate = function(){
var currentTime = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var currentDay = document.querySelector("#currentDay")
currentDay.textContent = currentTime;
}

var timeBox = document.querySelector("#textBox");

var timeColor = function() {
    var currentTime = moment().hours()

  
$(".time-block").each(function(){
    var textArea = parseInt($(this).attr("id")[1]);
    if (textArea < currentTime) {
        $(this).addClass("past");
    } else if  (textArea === currentTime){
        $(this).addClass("present");
    } else
     {
        $(this).addClass("future");
    }
})
    
}














theDate()
setInterval(theDate, 1000);
timeColor()