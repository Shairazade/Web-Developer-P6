const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauces').

router.post('/', multer, sauceCtrl.createThing); 
router.put('/:id', sauceCtrl.modifyThing);
router.delete('/:id', sauceCtrl.deleteThing);
router.get('/:id', sauceCtrl.getOneThing);
router.get('/', sauceCtrl.getAllThing);

module.exports = router;