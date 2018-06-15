////// UZAIR EDITS



$scope.validateUser = function ( ) {

var link2 = 'http://cloudsolutions-llc.com/mainhalal/index.php/staff/staff/auditor_login';

var name;
var id;
 var username = this.user.username;
        var password = this.user.password;


        return $http({method : "POST",
     url : link2,
     data : {username: username,
            password: password  },
     transformRequest: transformRequestAsFormPost,
     headers : {'Content-Type': "application/x-www-form-urlencoded"}
     //headers : {'Accept' : 'application/json'}
   }).success(function(data) {
     console.log(data);

     if(data.status == "true")
     {


      audits.auditdata = data;
      console.log(data);

       $rootScope.setToken(username); // create a session kind of thing on the client side
            $rootScope.hide();

             $window.location.href = ('#/tab/dash');
            $window.location.reload(true);
            

           
//console.log("audit id " + data.audits[0].id);
//console.log("final date " + data.audits[0].final_date);

window.localStorage['data_length'] = data.audits.length;

for(i = 0 ; i < data.audits.length; i++){

    $localstorage.setObject('audits'+i,data.audits[i]);

}
window.localStorage['id'] = data.id;
window.localStorage['name'] = data.name;

//$localstorage.setObject('audits',data.audits[0]);
 //window.localStorage['audits'] = data.audits;

 //console.log($localstorage.getObject('audits'));
 
 /*for(var i=0, len=data.audits.length; i < len; i++){ 
  console.log("MY audit dates ids " + data.audits[i].id + " final date  =" + data.audits[i].final_date  + " \n")




window.localStorage['audit_id' + i] = data.audits[i].id;
window.localStorage['final_date'+ i] = data.audits[i].final_date;
}*/

//console.log(data.audits[1].final_date.substr(0,10));
//console.log(audits.data.length);
//console.log(window.localStorage['id']);

//id = window.localStorage['id'] || 'you';
//name = window.localStorage['name'] || 'you2';
//alert('Hello, ' + name +  ' '  +id);
///document.getElementById("MyEdit").innerHTML +=  name ;
    //  console.log(name)



   }
     
     else {
       var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
     });
     }

     }).error(function(){

   console.log("error");

 return null;

});




    };



    .factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    removeItem: function(key){
    $window.localStorage.removeItem(key);
    },
    removeByIndex: function (id) {
    $window.localStorage.removeItem($window.localStorage.key(id));
    }
  }
}])




    

else if (util.hasClassName(target.parentNode, classes.days) && util.hasClassName(target, classes.dayActive) && (clickedDate = target.getAttribute('data-date')) && (clickedAudit_id = target.getAttribute('data-audit-id'))) {
    //DAY CLICK
       
          var mydate;

        $(".k-selected").on("click",function(){

           mydate =  $(this).attr("data-date");

           var data_length = window.localStorage['data_length']; 
          // console.log(data_length);
            for(i = 0 ; i < data_length; i++){

               var u =  JSON.parse(window.localStorage["audits"+i] || '{}');
                 if(mydate == u.final_date.substr(0,10)){

                    console.log(u.id);   
                 }

            }
   


        });


      //console.log(clickedAudit_id);
      cc = clickedDate;
      clickedDate = moment(clickedDate, opts.dayAttributeFormat).hours(12);

	  clickedAudit_id = moment(clickedAudit_id, opts.dayAttributeFormat).hours(12);
    
      console.log(clickedDate._d + "hahahaahahahh"  +clickedAudit_id._d)
      if (self.publish('date-clicked', self, [clickedDate]) !== false) {
       //main_audits = my_audits;
       main_audits = window.localStorage['audits'];

       console.log(main_audits.length);
         

        switch (opts.mode) {
          case 'multiple':
           console.log("hamzaaaaaaa" +clickedDate);
          ///self.addSelected(1439967600000);
            if (!self.addSelected(clickedDate)) //self.removeSelected(clickedDate);
            showDiv();

            break;
          case 'range':
            self.addSelected(clickedDate);
            break;
          case 'single':
            /* falls through */
          default:
            self.addSelected(clickedDate);

            console.log("hamzaaaaaaa" +clickedDate)
           
            showDiv();


            break;
        }

      }
      return false;
      
    }