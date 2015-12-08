var Country = require('../models/Country.js');

// GET
function getAll(request, response) {
  Country.find(function(error, countries) {
    if(error) response.json({message: 'Could not find any country'});

    response.json({countries: countries});
  });
}

// POST
function createCountry(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var country = new Country(request.body);

  country.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate country b/c:' + error});

    response.json({country: country});
  });
}

// GET
function getCountry(request, response) {
  var id = request.params.id;

  Country.findById({_id: id}, function(error, country) {
    if(error) response.json({message: 'Could not find country b/c:' + error});

    response.json({country: country});
  });
}

function updateCountry(request, response) {
  var id = request.params.id;

  Country.findById({_id: id}, function(error, country) {
    if(error) response.json({message: 'Could not find country b/c:' + error});

    if(request.body.name) country.name = request.body.name;

    country.save(function(error) {
      if(error) response.json({messsage: 'Could not update country b/c:' + error});

      response.json({message: 'Country successfully updated', country: country});
    });
  });
}

function removeCountry(request, response) {
  var id = request.params.id;

  Country.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete country b/c:' + error});

    response.json({message: 'Country successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createCountry: createCountry,
  getCountry: getCountry,
  updateCountry: updateCountry,
  removeCountry: removeCountry
}
