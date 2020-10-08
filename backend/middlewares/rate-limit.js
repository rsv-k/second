const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
   windowMs: 1 * 60 * 1000,
   max: 2,
   message: 'too many attempts',
});

module.exports = limiter;
