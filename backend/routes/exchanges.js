const router = require('express').Router();
const {
   getExchanges,
   getExchange,
   createExchange,
   editExchange,
   deleteExchange,
   patchExchange,
} = require('../controllers/exchanges');

router.get('', getExchanges);
router.get('/:id', getExchange);
router.post('', createExchange);
router.put('/:id', editExchange);
router.delete('/:id', deleteExchange);
router.patch('/:id', patchExchange);

module.exports = router;
