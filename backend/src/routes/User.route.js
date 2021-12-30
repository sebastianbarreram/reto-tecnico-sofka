const { Router } = require('express')
const router = Router()
const UserCtrl = require('../controllers/User.controller')

router.post('/crear', UserCtrl.crearUsuario)
router.get('/listarUsuarios', UserCtrl.listar)

module.exports = router