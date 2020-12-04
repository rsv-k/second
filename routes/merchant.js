const express = require('express');
const router = express.Router();
const merchantController = require('../controllers/merchant');

router.post('', merchantController.createMerchant);
router.get('', merchantController.getMerchants);
router.delete('/:id', merchantController.deleteMerchant);
router.put('/:id', merchantController.editMerchant);

module.exports = router;
