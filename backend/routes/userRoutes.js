const express = require('express');

const {createUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../controllers/userControllers');

const router = express.Router();
router.post('/new', createUser);
router.get('/', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;