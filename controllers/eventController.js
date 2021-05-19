'use strict';

const eventData = require('../data/events');
const getEvents = async(req, res, next) => {
    try
    {
       const events = await eventData.getEvents();
       console.log(events);
       res.send(events);
    }
    catch(error)
    {
        res.status(400).send(error.message);
    }
}

module.exports ={
    getEvents
}