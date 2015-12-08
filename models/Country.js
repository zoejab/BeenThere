var mongoose = require('mongoose');

var CountrySchema = mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Country', CountrySchema);
