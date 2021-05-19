'use strict';

const express = require('express');
const personafisicaController = require('../controllers/personafisicaController');
const router = express.Router();

const {getPersonasFisicas, getPersonaFisicaById, addPersonaFisica} = personafisicaController;

router.get('/personasfisicas', getPersonasFisicas);
router.get('/personafisica/:id', getPersonaFisicaById);
router.post('/personafisica', addPersonaFisica);

module.exports = {
    routes: router
}