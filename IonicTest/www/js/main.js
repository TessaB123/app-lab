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
    senddata = {"id" : 148233, "wachtwoord" : "Aukje2605200", "school": "canisius"};
    
            $.ajax({      
            contentType : "application/json",
    		type: 'POST',
    		url: 'http://applab.ai.ru.nl:8080/ateam/database/personen',
    		data: JSON.stringify(senddata)
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
    $.get('http://applab.ai.ru.nl:8080/ateam/database/personen/'+id,function(data) 
    {
        d = JSON.parse(data);
        opdrachten = d.opdrachten;
        laCode = '';
        
        document.getElementById("test").innerHTML = laCode;
        console.log(d.opdrachten);
    });
}

/*var app = angular.module('Ionic', ['ui.calendar'])*/

