// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("button").click(function(){
    var input= $("#input").val();
    $("#userChoice").text(input);
    $("#computerChoice").text(choices[1]);
});

var choices = ["rock","paper","scissors"];

// DOCUMENT READY FUNCTION BELOW

