'use strict';

const express = require('express');
const personafisicaController = require('../controllers/personafisicaController');
const router = express.Router();

const {
    getPersonasFisicas
    , getPersonaFisicaById
    , addPersonaFisica
    , updatePersonaFisica
    , deletePersonaFisica
} = personafisicaController;

router.get('/personasfisicas', getPersonasFisicas);
router.get('/personafisica/:id', getPersonaFisicaById);
router.post('/personafisica', addPersonaFisica);
router.put('/personafisica/:id', updatePersonaFisica);
router.delete('/personafisica/:id', deletePersonaFisica);

module.exports = {
    routes: router
}