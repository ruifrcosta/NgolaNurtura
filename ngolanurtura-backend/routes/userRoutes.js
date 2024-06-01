const express = require('express');
const router = express.Router();
const { getUser, updateUser, updatePassword } = require('../controllers/user');
const auth = require('../middleware/auth');

router.get('/', auth, getUser);
router.put('/', auth, updateUser);
router.put('/password', auth, updatePassword);

module.exports = router;