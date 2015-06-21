// refresh function
/*
$.post('http://applab.ai.ru.nl:8080/ateam/database/personen'+currentSentence, function(coldata) 
{
    
});*/

$("button").click(function(){

});

/*
$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});*/

var id = 148233;

function refresh(){
    console.log("Bla");
    $.post('php/read_refresh.php?id='+id,function(data) 
    {
        d = JSON.parse(data);
        console.log(d.voornaam);
    });
}

var app = angular.module('Ionic', ['ui.calendar'])