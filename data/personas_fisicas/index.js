'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getPersonasFisicas = async() => {
    try
    {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('personas_fisicas');
        const list = await pool.request().query(sqlQueries.personaFisicaList);
        console.log(list);
        return list.recordset;
    }catch(error)
    {
        return error.message;
    }
}


const getPersonaFisicaById = async(idPersonaFisica) => {
    try
    {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('personas_fisicas');
        const onPersonaFisica = await pool.request()
                                .input('IdPersonaFisica', sql.Int, idPersonaFisica)
                                .query(sqlQueries.personaFisicaById);

        return onPersonaFisica.recordset;
    }catch(error)
    {
        return error.message;
    }
}


const createPersonaFisica = async(personaFisicaData) => {
    try
    {

    ////METODO: INSERT QUERY
    //     let pool = await sql.connect(config.sql);
    //     const sqlQueries = await utils.loadSqlQueries('personas_fisicas');
    //     const insertPersonaFisica = await pool.request()
    //                             .input('FechaRegistro', sql.Date, personaFisicaData.FechaRegistro)
    //                             .input('FechaRegistro', sql.Date, personaFisicaData.FechaRegistro)
    //                             .input('FechaActualizacion', sql.Date, personaFisicaData.FechaActualizacion)
    //                             .input('Nombre', sql.NVarChar(50), personaFisicaData.Nombre)
    //                             .input('ApellidoPaterno', sql.NVarChar(50), personaFisicaData.ApellidoPaterno)
    //                             .input('ApellidoMaterno', sql.NVarChar(50), personaFisicaData.ApellidoMaterno)
    //                             .input('RFC', sql.NVarChar(13), personaFisicaData.RFC)
    //                             .input('FechaNacimiento', sql.Date, personaFisicaData.FechaNacimiento)
    //                             .input('UsuarioAgrega', sql.Int, personaFisicaData.UsuarioAgrega)
    //                             .input('Activo', sql.Bit, personaFisicaData.Activo)
    //                             .query(sqlQueries.createPersonaFisica);
                                

    //     console.log(insertPersonaFisica);

    //     return onEvent.recordset;
    // }
    // catch(error)
    // {
    //     return error;
    // }

    ////METODO: EJECUTUAR SP CON QUERY
    //     let pool = await sql.connect(config.sql);
    //     const sqlQueries = await utils.loadSqlQueries('personas_fisicas');
    //     const insertPersonaFisica = await pool.request()
    //                             .input('Nombre', sql.NVarChar(50), personaFisicaData.Nombre)
    //                             .input('ApellidoPaterno', sql.NVarChar(50), personaFisicaData.ApellidoPaterno)
    //                             .input('ApellidoMaterno', sql.NVarChar(50), personaFisicaData.ApellidoMaterno)
    //                             .input('RFC', sql.NVarChar(13), personaFisicaData.RFC)
    //                             .input('FechaNacimiento', sql.Date, personaFisicaData.FechaNacimiento)
    //                             .input('UsuarioAgrega', sql.Int, personaFisicaData.UsuarioAgrega)
    //                             .input('Activo', sql.Bit, personaFisicaData.Activo)
    //                             .query(sqlQueries.sp_AgregarPersonaFisica);
                                

    //     console.log(insertPersonaFisica);

    //     return onEvent.recordset;
    // }
    // catch(error)
    // {
    //     return error;
    // }

    ////METODO: EJECUTUAR SP CON EXECUTE
        let error;
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('personas_fisicas');
        const insertPersonaFisica = await pool.request()
                                .input('Nombre', sql.NVarChar(50), personaFisicaData.Nombre)
                                .input('ApellidoPaterno', sql.NVarChar(50), personaFisicaData.ApellidoPaterno)
                                .input('ApellidoMaterno', sql.NVarChar(50), personaFisicaData.ApellidoMaterno)
                                .input('RFC', sql.NVarChar(13), personaFisicaData.RFC)
                                .input('FechaNacimiento', sql.Date, personaFisicaData.FechaNacimiento)
                                .input('UsuarioAgrega', sql.Int, personaFisicaData.UsuarioAgrega)
                                .execute('dbo.sp_AgregarPersonaFisica').then(function(err, recordsets, returnValue, affected) {
                                    console.log(err.recordset[0].ERROR);
                                    console.log(err.recordset[0].MENSAJEERROR);
                                    error = err.recordsets[0][0];
                                }).catch(function(err) {
                                    console.log(err);
                                });
        return error;
    }
    catch(error)
    {
        return error;
    }
}

const updatePersonaFisica = async(idPersonaFisica, personaFisicaData) => {
    try
    {
    ////METODO: EJECUTUAR SP CON EXECUTE
        let error;
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('personas_fisicas');
        const actualizarPersonaFisica = await pool.request()
                                .input('IdPersonaFisica', sql.Int, idPersonaFisica)
                                .input('Nombre', sql.NVarChar(50), personaFisicaData.Nombre)
                                .input('ApellidoPaterno', sql.NVarChar(50), personaFisicaData.ApellidoPaterno)
                                .input('ApellidoMaterno', sql.NVarChar(50), personaFisicaData.ApellidoMaterno)
                                .input('RFC', sql.NVarChar(13), personaFisicaData.RFC)
                                .input('FechaNacimiento', sql.Date, personaFisicaData.FechaNacimiento)
                                .input('UsuarioAgrega', sql.Int, personaFisicaData.UsuarioAgrega)                           
                                .execute('dbo.sp_ActualizarPersonaFisica').then(function(err, recordsets, returnValue, affected) {
                                    console.dir(err);
                                    console.log(err.recordset[0].ERROR);
                                    console.log(err.recordset[0].MENSAJEERROR);
                                    error = err.recordsets[0][0];
                                }).catch(function(err) {
                                    console.log(err);
                                });
                                
        return error;
    }
    catch(error)
    {
        return error;
    }

    
}

const deletePersonaFisica = async(idPersonaFisica) => {
    try
    {
    ////METODO: EJECUTUAR SP CON EXECUTE
        let error;
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('personas_fisicas');
        const actualizarPersonaFisica = await pool.request()
                                .input('IdPersonaFisica', sql.Int, idPersonaFisica)                         
                                .execute('dbo.sp_EliminarPersonaFisica').then(function(err, recordsets, returnValue, affected) {
                                    console.dir(err);
                                    console.log(err.recordset[0].ERROR);
                                    console.log(err.recordset[0].MENSAJEERROR);
                                    error = err.recordsets[0][0];
                                }).catch(function(err) {
                                    console.log(err);
                                });
                                
        return error;
    }
    catch(error)
    {
        return error;
    }

    
}

module.exports = {
    getPersonasFisicas,
    getPersonaFisicaById,
    createPersonaFisica,
    updatePersonaFisica,
    deletePersonaFisica
}