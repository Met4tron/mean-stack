var express = require('express');
var router = express.Router();
var ctrlLocation = require('../controllers/location')
var ctrlOthers = require('../controllers/others')

/* GET home page. */
router.get('/', ctrlLocation.homelist);
router.get('/location',ctrlLocation.locationInfo);
router.get('/location/review/new', ctrlLocation.addReview);

/*Other*/

router.get('/about',ctrlOthers.about);

module.exports = router;
