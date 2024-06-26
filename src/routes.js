const { Router } = require('express');
const queries = require('./queries')

const router = Router();

router.get('/', queries.getCountries);
router.get('/:id', queries.getCountryById);
router.post('/', queries.addCountry);


module.exports = router;