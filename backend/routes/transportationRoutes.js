const express = require('express');

const {addTransportationDetails, getAllTransportationDetails, getSingleTransportationRec, updateTransportationRec, deleteTransportationRec} = require('../controllers/transportationControllers');

const router = express.Router();

router.post('/:id', addTransportationDetails);
router.get('/:id', getAllTransportationDetails);
router.get('/:id/:transRecId', getSingleTransportationRec);
router.put('/:id/:transRecId', updateTransportationRec);
router.delete('/:id/:transRecId', deleteTransportationRec);

module.exports = router;