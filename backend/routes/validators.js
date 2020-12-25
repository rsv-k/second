const express = require('express');
const router = express.Router();
const {
   getValidators,
   createValidator,
   editValidator,
   deleteValidator,
} = require('../controllers/validators');

router.get('', getValidators);
router.post('', createValidator);
router.put('/:id', editValidator);
router.delete('/:id', deleteValidator);

module.exports = router;
