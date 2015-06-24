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
    console.log("Blaf");
    json = {"id" : 148233, "wachtwoord" : "Aukje2605200", "school": "canisius"};
    
    $.ajax({
        url: 'http://applab.ai.ru.nl:8080/ateam/database/personen',
        data: json,
        type: 'POST',
        dataType: 'jsonp',
        success: function() { alert("Success"); },
        error: function() { alert('Failed!'); },
    });
}

function getRooster(){
   console.log("Rooster fetching...");
    $.get('php/read_refresh.php?id='+id+'/rooster',function(data) 
    {
        d = JSON.parse(data);
        console.log(d);
    });
}

function getToPlan(){
    console.log("Assignments fetching...");
    $.get('php/read_refresh.php?id='+id,function(data) 
    {
        d = JSON.parse(data);
        opdrachten = d.opdrachten;
        laCode = [];
        document.getElementById("test").innerHTML = '<button class="button button-light" onclick="getRooster()" >Click me</button>';

                    $( "#success" ).load( "../templates/inplannen.html", function( response, status, xhr ) {
                        console.log(response);
                if ( status == "error" ) 
                {
                    var msg = "Sorry but there was an error: ";
                    console.log(msg);
                }
            }); 
        for(i = 0; i < opdrachten.length; i++)
        {
  
        }
        console.log(d.opdrachten);
    });
}

/*var app = angular.module('Ionic', ['ui.calendar'])*/

