const { Router } = require('express')
const router = Router()
const QuestionCtrl = require('../controllers/Question.controller')

router.post('/crear', QuestionCtrl.crearPregunta)
router.get('/listarPreguntas', QuestionCtrl.listar)
router.get('/listar/:id', QuestionCtrl.listarId)
router.get('/preguntasPorCategoria/:categoria', QuestionCtrl.preguntaPorCategoria)
router.delete('/eliminar/:id', QuestionCtrl.eliminar)
router.put('/actualizar/:id', QuestionCtrl.actualizar)

module.exports = router