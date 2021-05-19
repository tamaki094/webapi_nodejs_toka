'use strict';

const personafisicaData = require('../data/personas_fisicas');


const getPersonasFisicas = async(req, res, next) => {
    try
    {
       const personas_fisicas = await personafisicaData.getPersonasFisicas();
       console.log(personas_fisicas);
       res.send(personas_fisicas);
    }
    catch(error)
    {
        res.status(400).send(error.message);
    }
}


const getPersonaFisicaById = async(req, res, next) => {
    try
    {
        const idPersonaFisica = req.params.id;
        const persona_fisica = await personafisicaData.getPersonaFisicaById(idPersonaFisica);
        console.log(persona_fisica);
        res.send(persona_fisica);
    }
    catch(error)
    {
        res.status(400).send(error.message);
    }
}


const addPersonaFisica = async(req, res, next) => {
    try
    {
        const data = req.body;
        const created = await personafisicaData.createPersonaFisica(data); 
        res.send(created);
    }
    catch(error)
    {
        res.status(400).send(error.message);
    }
}

module.exports ={
    getPersonasFisicas,
    getPersonaFisicaById,
    addPersonaFisica
}