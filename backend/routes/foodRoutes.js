const express = require('express');

const {addFoodDetails, getAllFoodDetails, getSingleFoodRec, updateFoodRec, deleteFoodRec} = require('../controllers/foodControllers');

const router = express.Router();

router.post('/:id', addFoodDetails);
router.get('/:id', getAllFoodDetails);
router.get('/:id/:foodRecId', getSingleFoodRec);
router.put('/:id/:foodRecId', updateFoodRec);
router.delete('/:id/:foodRecId', deleteFoodRec);

module.exports = router;