'use strict';
countryApp.controller('CountriesController', ['$log','countryData', CountriesController])

function CountriesController($log,countryData){
  $log.info("I'm inside the controller");

  var self = this;

  //collections
  self.all=[];

  //methods
  self.addCountry = addCountry;
  self.getCountries = getCountries;
  self.deleteCountry = deleteCountry;

  getCountries();

  function getCountries(){
    //go to our dataservice
      /* make a GET call */
    countryData.getAll()
      .$promise
      .then( function(res){
        self.all = res.countries;
        $log.log(self);
      })
      .catch(function(res){
        $log.error('failure',res);
      });
  }

    function deleteCountry(country){
      countryData.deleteCountry(country)
          .$promise
          .then( function(res){
            getCountries();
          })
      .catch(function(res){
        $log.error('failure',res);
      });
      }

      function addCountry(){
         countryData.addCountry(self.newCountry)
          .then( function(res){
            getCountries();
          })
        .catch(function(res){
          $log.error('failure',res);
        });
        self.newCountry = {};
      }


}
