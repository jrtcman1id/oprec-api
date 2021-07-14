const {Router} = require('express');

const recruits = require('./recruits');

const router = Router();

router.use('/recruits', recruits); 

module.exports = router;