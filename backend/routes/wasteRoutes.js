const express = require('express');

const {addWasteDetails, getAllWasteDetails, getSingleWasteRec, updateWasteRec, deleteWasteRec} = require('../controllers/wasteControllers');

const router = express.Router();

router.post('/:id', addWasteDetails);
router.get('/:id', getAllWasteDetails);
router.get('/:id/:wasteRecId', getSingleWasteRec);
router.put('/:id/:wasteRecId', updateWasteRec);
router.delete('/:id/:wasteRecId', deleteWasteRec);

module.exports = router;