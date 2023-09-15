const express = require('express')
const ControllerExercicio = require('../controllers/exercicio1')

const controller = new ControllerExercicio()
const router = express.Router()
router.post('/api/exercicio1', controller.somar)

module.exports = router