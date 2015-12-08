var express       = require('express'),
    router          = express.Router(),
    bodyParser      = require('body-parser'), //parses information from POST
    methodOverride  = require('method-override'); //used to manipulate POST

var countriesController = require('../controllers/countries.js');


router.route('/countries').get(countriesController.getAll)
.post(countriesController.createCountry);

router.route('/countries/:id').get(countriesController.getCountry)
.patch(countriesController.updateCountry)
.delete(countriesController.removeCountry);


module.exports = router;
