const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.get('/', catalogController.getHome);
router.get('/about', catalogController.getAbout);
router.get('/catalog', catalogController.getCatalog);
router.get('/catalog/add', catalogController.getAddForm);
router.post('/catalog/add', catalogController.postAddForm);

module.exports = router;