'use strict';

const express = require('express');
const personafisicaController = require('../controllers/personafisicaController');
const router = express.Router();

const {getPersonasFisicas, getPersonaFisicaById, addPersonaFisica, updatePersonaFisica} = personafisicaController;

router.get('/personasfisicas', getPersonasFisicas);
router.get('/personafisica/:id', getPersonaFisicaById);
router.post('/personafisica', addPersonaFisica);
router.put('/personafisica/:id', updatePersonaFisica);

module.exports = {
    routes: router
}