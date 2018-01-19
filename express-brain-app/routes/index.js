var express = require('express');
var router = express.Router();

/* GET ng home page. */
router.get('/', function(req, res, next) {
  res.render('dist/index');
});


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;
