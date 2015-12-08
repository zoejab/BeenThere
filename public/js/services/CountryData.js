'use strict';
countryApp.factory('countryData',['$resource',countryDataFactory])

function countryDataFactory($resource){
  var Country = $resource('/countries/:id',{id:'@id'});

  return {
    getAll: function(){
      return Country.get();
    },
    addCountry: function(countryData){
      return new Country(countryData).$save();
    },
    deleteCountry: function(country){
      return Country.delete({id:country._id})
    }
  };
}
