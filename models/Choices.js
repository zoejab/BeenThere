var mongoose = require('mongoose');

var ChoicesSchema = mongoose.Schema({
  countryCode: String,
  countryName: String,
  continentName: String,
  continent: String,
  isoAlpha3: String,
  selected: Boolean
});


var Choices = mongoose.model("Choices", ChoicesSchema);

module.exports = Choices;
