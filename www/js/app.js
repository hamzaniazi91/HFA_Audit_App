// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


var clickedDate;
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services' ,'ngCordova' , 'ngResource'])




.run(function($ionicPlatform, $rootScope) {

  /********************************************************************
 *  Kalendae, a framework agnostic javascript date picker           *
 *  Copyright(c) 2012 Jarvis Badgley (chipersoft@gmail.com)         *
 *  http://github.com/ChiperSoft/Kalendae                           *
 *  Version 0.2                                                     *
 ********************************************************************/


  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

  console.log($rootScope);
  


    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });



})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js




  $stateProvider

  // setup an abstract state for the tabs directive

   .state('auth', {
                url: "/auth",
                abstract: true,
                templateUrl: "templates/auth.html"
            })

.state('auth.signin', {
                url: '/signin',
                views: {
                    'auth-signin': {
                        templateUrl: 'templates/auth-signin.html',
                        controller: 'SignInCtrl'
                    }
                }
            })

 .state('auth.signup', {
                url: '/signup',
                views: {
                    'auth-signup': {
                        templateUrl: 'templates/auth-signup.html',
                        controller: 'SignUpCtrl'
                    }
                }
            })


    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

     

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.audit', {
    url: '/audit',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-audit.html',
        controller: 'AuditCtrl'
      }
    }
  })

  .state('tab.audit_question', {
    url: '/auditQuestion',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-audit-question.html',
        controller: 'AuditCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'myBusStopCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/auth/signin');

})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])

.controller("ExampleController", function($scope, $cordovaCalendar) {
 
    $scope.createEvent = function() {
        $cordovaCalendar.createEvent({
            title: 'Space Race',
            location: 'The Moon',
            notes: 'Bring sandwiches',
            startDate: new Date(2015, 0, 15, 18, 30, 0, 0, 0),
            endDate: new Date(2015, 1, 17, 12, 0, 0, 0, 0)
        }).then(function (result) {
            console.log("Event created successfully");
        }, function (err) {
            console.error("There was an error: " + err);
        });
    }
 
})

.factory('userService', function($http) {
  return {
    GetUser: function() {

      name = "andrea"
        return clickedDate._d;
    } 
    
  }
})

.factory('Post', function($resource,$http , transformRequestAsFormPost) {





  //  url: "http://192.168.1.104/mainhalal/index.php/staff/Numbers/staff/",



 
  return $resource('http://cloudsolutions-llc.com/mainhalal/index.php/staff/Numbers/staff/');
})

.controller('MainCtrl', function($ionicPopup ,$scope, Post , $http , transformRequestAsFormPost) {
  // Get all posts
$scope.data = {};

var selectedRadio ;
//var gender ;
//gender= document.querySelector("input[name='group']:checked").value;

   $scope.serverSideList =  [
    { text: "Yes", value: "Yes" },
    { text: "No", value: "No" },
    { text: "Pre-Arranged", value: "Pre-Arranged" },
    { text: "Un-Announced", value: "Un-Announced" }
  ];
$scope.serverSideChange = function(item) {
    console.log("Selected Serverside, text:", item.text, "value:", item.value);

    selectedRadio = item.value;
  };
   

console.log(selectedRadio);
  

  
 

$scope.getTotal = function(){
        var Cost1= $scope.under.cost1;
        var Cost2 = $scope.under.cost2;
      
      
        
            return  total += (product.price * product.quantity);
                
    };


$scope.closeModal = function (index) {
  if (index == 1) $scope.modal.hide();
      else if(index ==2) $scope.modal2.hide();
      else $scope.modal3.hide();
};

/////form 1




    $scope.submit = function(task){




        var id = window.localStorage['id'];
var audit_id = window.localStorage['Selected_audit_id'];
        var link = 'http://cloudsolutions-llc.com/mainhalal/index.php/staff/staff/audit_outcome_sheet';

        console.log("Auditor ID  ===== " + id );
console.log("Auditor ID  ===== " + task.orgname );
        return $http({method : "POST",
     url : link,
     data : {
      id : id,
      audit_id : audit_id,
      org_name : task.orgname ,
      comment_1 : task.comment1,
     comment_2 : task.comment2 , 
      comment_3 : task.comment3 ,
       comment_4 : task.comment4,
        issues_raised  : task.issues ,
        suggested_correction  :  task.sugest ,
        re_audit :    selectedRadio,
        client_company : task.comp ,
        print_name :  task.print1 ,
        hfa_auditor :task.sign,
            auditor_print_name : task.print2


        },
     transformRequest: transformRequestAsFormPost,
     headers : {'Content-Type': "application/x-www-form-urlencoded"}
     //headers : {'Accept' : 'application/json'}
   }).success(function(data) {
     console.log(data);
    $scope.closeModal(1);
    if( data == "audit outcome sheet already sent ")
     {
      var alertPopup = $ionicPopup.alert({
                title: 'Status',
                template: "expense claim sheet already sent "
     });
     }
     else {

      var alertPopup = $ionicPopup.alert({
                title: 'Status!',
                template: 'Success'
     });
    }

     }).error(function(){

   console.log("error");
 return null;

});
    };


/////form 2 

var meet1 , over1  , train1 , other1  ,sem1  , ofc1 ,reason1;
$scope.pushNotification = { checked: 0 , meet: 0 , over :0 , train : 0 , other : 0 ,sem : 0 , ofc : 0, reason:0};
  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change'+ $scope.pushNotification.meet+ $scope.pushNotification.over+
      $scope.pushNotification.train+ $scope.pushNotification.other+ $scope.pushNotification.sem+ $scope.pushNotification.ofc , $scope.pushNotification.reason);

    meet1 =$scope.pushNotification.meet;
      over1  =$scope.pushNotification.over;
        train1   =$scope.pushNotification.train;
        other1   =$scope.pushNotification.other;
       sem1   =$scope.pushNotification.sem;
    ofc1  =$scope.pushNotification.ofc;
    reason1 =$scope.pushNotification.reason;

console.log("external data  = " + meet1 + over1 + train1 + other1 + sem1 + ofc1);



  };




  
  



$scope.submit2 = function(task2,under,nat,taxi,car,air,hot,f,ld,sun,ofc,oth,total){
        var link2 = 'http://cloudsolutions-llc.com/mainhalal/index.php/staff/staff/expence_claim_sheet';

 var id = window.localStorage['id'];
 var audit_id = window.localStorage['Selected_audit_id'];
        return $http({method : "POST",
     url : link2,
     data : {
      id : id,
      audit_id : audit_id ,
        claimant_name : task2.claimname ,
          signature : task2.sign ,
            audit : reason1 ,
              company_name : task2.compname ,
                audit_date : task2.date,
                  meeting : meet1 ,
                    overseas_travel : over1 ,
                      training : train1 ,
                        other_authorised_events : other1 ,
                          Seminar_Conference : sem1,
                            office_expense : ofc1 ,


                             Underground_date : under.date ,
                                  Underground_c_card  : under.cost1 ,
                                    Underground_cash  : under.cost2 ,
                                    Underground_total : under.total,


                                     National_date : nat.date ,
                                  National_c_card  : nat.cost1,
                                    National_cash  : nat.cost2 ,
                                     National_total : nat.total,


                               Taxi_date : taxi.date ,
                                  Taxi_c_card  : taxi.cost1 ,
                                    Taxi_cash  : taxi.cost2 ,
                                     Taxi_total : taxi.total,
                                      

                              Car_date : car.date ,
                                  Car_c_card  : car.cost1 ,
                                    Car_cash  : car.cost2 ,
                                     Car_total : car.total,

                               Air_date : air.date ,
                                  Air_c_card  : air.cost1 ,
                                    Air_cash  : air.cost2 ,
                                     Air_total : air.total,


                               Hotel_date : hot.date ,
                                  Hotel_c_card  : hot.cost1 ,
                                    Hotel_cash  : hot.cost2 ,
                                     Hotel_total : hot.total,



                           Fuel_date : f.date ,
                                  Fuel_c_card  : f.cost1 ,
                                    Fuel_cash  : f.cost2 ,
                                     Fuel_total : f.total,


                                      Lunch_date : ld.date,
                                  Lunch_c_card  : ld.cost1,
                                    Lunch_cash  : ld.cost2 ,
                                     Lunch_total : ld.total,




                                      Sundry_date : sun.date ,
                                  Sundry_c_card  : sun.cost1 ,
                                    Sundry_cash  : sun.cost2 ,
                                     Sundry_total : sun.total,



                                     Office_date : ofc.date ,
                                  Office_c_card  : ofc.cost1 ,
                                    Office_cash  : ofc.cost2 ,
                                     Office_total : ofc.total,




                                     Other_date : oth.date ,
                                  Other_c_card  : oth.cost1 ,
                                    Other_cash  : oth.cost2 ,
                                     Other_total : oth.total,




                                     
                             
                                  Total_c_card  : total.Total1 ,
                                    Total_cash  : total.Total2 ,
                                     Total_total : total.Final1




                                  

                                },
     transformRequest: transformRequestAsFormPost,
     headers : {'Content-Type': "application/x-www-form-urlencoded"}
     //headers : {'Accept' : 'application/json'}
   }).success(function(data) {
     console.log(data);

     if( data == "expense claim sheet already sent ")
     {
      var alertPopup = $ionicPopup.alert({
                title: 'Status',
                template: "expense claim sheet already sent "
     });
     }
     else {

      var alertPopup = $ionicPopup.alert({
                title: 'Status!',
                template: 'Success'
     });

     }
     
     $scope.closeModal(3);

     }).error(function(){

   console.log("error");
 return null;

});
    };




})


.factory(
            "transformRequestAsFormPost",
            function() {
                // I prepare the request data for the form post.
                function transformRequest( data, getHeaders ) {
                    var headers = getHeaders();
                    headers[ "Content-type" ] = "application/json; charset=utf-8";
                    return( serializeData( data ) );
                }
                // Return the factory value.
                return( transformRequest );
                // ---
                // PRVIATE METHODS.
                // ---
                // I serialize the given Object into a key-value pair string. This
                // method expects an object and will default to the toString() method.
                // --
                // NOTE: This is an atered version of the jQuery.param() method which
                // will serialize a data collection for Form posting.
                // --
                // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
                function serializeData( data ) {
                    // If this is not an object, defer to native stringification.
                    if ( ! angular.isObject( data ) ) {
                        return( ( data == null ) ? "" : data.toString() );
                    }
                    var buffer = [];
                    // Serialize each key in the object.
                    for ( var name in data ) {
                        if ( ! data.hasOwnProperty( name ) ) {
                            continue;
                        }
                        var value = data[ name ];
                        buffer.push(
                            encodeURIComponent( name ) +
                            "=" +
                            encodeURIComponent( ( value == null ) ? "" : value )
                        );
                    }
                    // Serialize the buffer and clean it up for transportation.
                    var source = buffer
                        .join( "&" )
                        .replace( /%20/g, "+" )
                    ;
                    return( source );
                }
            }
        );





