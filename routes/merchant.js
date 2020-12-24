const express = require('express');
const router = express.Router();
const {
   getMerchants,
   createMerchant,
   editMerchant,
   deleteMerchant,
} = require('../controllers/merchants');

router.get('', getMerchants);
router.post('', createMerchant);
router.put('/:id', editMerchant);
router.delete('/:id', deleteMerchant);

module.exports = router;
