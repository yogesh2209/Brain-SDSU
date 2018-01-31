var express = require('express');
var router = express.Router();
var brain_slicer_controller = require('../controllers/brainSlicerController');

/* GET users listing. */
router.get('/', brain_slicer_controller.slicer);

router.get('/ten', brain_slicer_controller.get_ten_points)

router.get('/xSlice/:x', brain_slicer_controller.get_x_slice)

router.get('/ySlice/:y', brain_slicer_controller.get_y_slice)

router.get('/zSlice/:z', brain_slicer_controller.get_z_slice)

router.get('/all', brain_slicer_controller.get_all)

router.get('/catagorySlice/:catagory', brain_slicer_controller.get_catagory_slice)

module.exports = router;
