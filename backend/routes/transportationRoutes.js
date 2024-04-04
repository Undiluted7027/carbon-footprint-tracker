const express = require('express');

const {addTransportationDetails, getAllTransportationDetails, getSingleTransportationRec, updateTransportationRec, deleteTransportationRec, calculateUserCFDate} = require('../controllers/transportationControllers');

const router = express.Router();

router.post('/:id', addTransportationDetails);
// router.get('/:id', getAllTransportationDetails);
router.get('/:id', calculateUserCFDate);
// router.post('/:id/:transRecId', calculateUserCFDate);
router.put('/:id/:transRecId', updateTransportationRec);
router.delete('/:id/:transRecId', deleteTransportationRec);

module.exports = router;