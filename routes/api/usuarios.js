const express = require('express');
const router = express.Router();
const usuarioController = require('../../controller/api/usuariosControllerAPI');

router.get('/', usuarioController.usuarios_list);
router.post('/create', usuarioController.usuarios_create);
router.post('/reservar', usuarioController.usuarios_reservar);

module.exports = router;