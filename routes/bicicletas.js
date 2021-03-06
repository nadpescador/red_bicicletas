const express = require('express');
const router = express.Router();
const bicicletaController = require('../controller/api/bicicletaControllerAPI');

router.get('/', bicicletaController.bicicleta_list);
router.post('/create', bicicletaController.bicicleta_create);
//router.delete('/:id/delete', bicicletaController.bicicleta_delete_post);


module.exports = router;
