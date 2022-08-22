const express = require('express')
const realEstateController = require('../controllers/realEstateController')

const router = new express.Router()

router.get('/', realEstateController.getAllAssets)

router.get('/assets', realEstateController.getAssets)

router.post('/asset', realEstateController.newAsset)

module.exports = router