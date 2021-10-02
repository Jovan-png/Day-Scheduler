var theDate = function(){
var currentTime = moment().format("MMMM Do, YYYY - hh:mm:ss a");
var currentDay = document.querySelector("#currentDay")
currentDay.textContent = currentTime;
}

var timeBox = document.querySelector("#textBox");

var timeColor = function() {
    var currentTime = moment().format("MMMM Do, YYYY - hh:mm:ss a");
  

    
}














theDate()
setInterval(theDate, 1000);