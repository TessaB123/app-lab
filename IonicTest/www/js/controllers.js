angular.module('ionicApp.controllers', ['ui.calendar', 'ui.bootstrap'])

    .controller('MainCtrl', function($scope, $state, $ionicSideMenuDelegate) {
        //console.log('MainCtrl');
        //setTimeout(function () {
        //    navigator.splashscreen.hide();
        //}, 750);

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.toIntro = function() {
            window.localStorage['didTutorial'] = "false";
            $state.go('app.intro');
        };
    })

    .controller('ProfielCtrl', function($scope, $state) {
        $scope.data = {};
    
        $scope.logOut = function()
        {
            $state.go('app.login');       
   
        }
        
    })

    .controller('PlanningCtrl', function($scope, $state) {

    })

    .controller('InplannenCtrl', function($scope, $ionicPopup, $timeout) {
        $scope.data = {};
        
        $scope.login = function() {
            keren = parseInt($scope.data.keer);
            duur = $scope.data.tijd;
            $.post('php/read_refresh.php?id=',function(data) 
            {
                d = JSON.parse(data);
                console.log(d.voornaam);
                
            });
            console.log("Keren: " + $scope.data.keer + " - Min: " + $scope.data.tijd);
        }
    })

    .controller('LoginCtrl', function($scope, $state) {
        $scope.data = {};
        
        $scope.login = function() {
            username = parseInt($scope.data.username);
            password = $scope.data.password;
            school = $scope.data.school;
            $.post('php/read_refresh.php?',{"id" : 148233, "wachtwoord" : "Aukje2605200", "school": "canisius"},function(data) 
            {
                d = JSON.parse(data);
                console.log(d);
                
            });
            console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password + " - School: " + $scope.data.school);
            $state.go('app.home');
        }
        })

    .controller('RoosterCtrl', function RoosterCtrl($scope,$compile,uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.changeTo = 'Hungarian';
    /* event source that pulls from google.com */
    $scope.eventSource = {
            /*url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!*/
    };
    /* event source that contains custom events on the scope */
    $scope.events = [
        
      {title: 'All Day Event',start: new Date(y, m, 1)}
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        console.log(view);
        console.log(date);
        $scope.alertMessage = (date.title + ' was clicked ');
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };
    /* add custom event*/
    $scope.refreshEvent = function() {
        $.get('php/post_timeblox.php?id='+id+'/rooster',function(data) 
        {
            console.log("Refreshing rooster...");
            d = JSON.parse(data);
            roo = d;
            for (i = 0; i < roo.length; i++) {
                console.log(roo[i]);
                startTime = roo[i].begin;
                startDag = startTime.split("T")[0];
                startDag = startDag.split("-");
                startTijd = startTime.split("T")[1];
                startTijd = startTijd.split(":");
                startDate = new Date(startDag[0], (parseInt(startDag[1]) - 1), startDag[2], (parseInt(startTijd[0]) + 2), startTijd[1]);
                console.log(startDate);
                endTime = roo[i].end;
                endDag = endTime.split("T")[0];
                endDag = endDag.split("-");
                endTijd = endTime.split("T")[1];
                endTijd = endTijd.split(":");
                endDate = new Date(endDag[0], (parseInt(endDag[1]) - 1), endDag[2], (parseInt(endTijd[0]) + 2), endTijd[1]);              
                console.log(endDate);
                
                if(roo[i].type == "test")
                    clas = 'test';
                else if (roo[i].type == "homework")
                    clas = 'homework';
                else
                    clas = 'regular';
                $scope.events.push({
                    title: roo[i].vak,
                    start: startDate,
                    end: endDate,
                    className: [clas]
                });
            }
        });
      
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) { 
        element.attr({'tooltip': event.title,
                      'tooltip-append-to-body': true});
        $compile(element)($scope);
    };
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        lang : 'nl',
        defaultView : 'agendaWeek',
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

    $scope.changeLang = function() {
      if($scope.changeTo === 'Hungarian'){
        $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
        $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
        $scope.changeTo= 'English';
      } else {
        $scope.uiConfig.calendar.dayNames = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
        $scope.uiConfig.calendar.dayNamesShort = ["Zo", "Ma", "Di", "Woe", "Do", "Vr", "Za"];
        $scope.changeTo = 'Hungarian';
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
    $scope.uiConfig.calendar.dayNames = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    $scope.uiConfig.calendar.dayNamesShort = ["Zo", "Ma", "Di", "Woe", "Do", "Vr", "Za"];  
})

    .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
        var startApp = function () {
            $state.go('app.home');

            window.localStorage['didTutorial'] = true;
        };

        if (window.localStorage['didTutorial'] === "true") {
            console.log('Skip intro');
            startApp();
        }

        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
        };


        $scope.next = function(){
            $ionicSlideBoxDelegate.next();
        };

        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };

        $scope.toApp = function(){
          $state.go('app.home');
          window.localStorage['didTutorial'] = true;
        };
    });
