'use strict';

const express = require('express');
const bodyParser = require('body-parser')

const port = 3000;
const app = express();

const DATABASE_URL = process.env.DATABASE_URL;
const mongoose = require('mongoose');
const stationModel = require('./model/station');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/v1/stations/:id?', async (req, res) => {
    if (req.params.id) {
        var station = await stationModel.findOne({_id: req.params.id});
        if (station) {
            return res.send(station);
        }
        return res.sendStatus(404);
    }
    res.send(await stationModel.find());
});

app.put('/api/v1/stations/:id/status/:status', async (req, res) => {
    var station = await stationModel.findOne({_id: req.params.id});
    if (!station) {
        return res.sendStatus(404);
    }

    station.status = req.params.status;
    station.save();

    return res.sendStatus(200);
})

app.post('/api/v1/stations', async (req, res) => {
    console.log(req.body)

    var newStation = new stationModel(req.body);
    newStation.save();
    res.send(newStation);
});

app.delete('/api/v1/stations/id', async(req, res) => {
    stationModel.deleteOne({_id: req.params.id});
    res.sendStatus(200);
});

app.get('/', async (req, res) => {
    var number = await stationModel.count();
    res.send(`There are currently ${number} stations in the database.`)
});
 
app.listen(port, async () => {
    await mongoose.connect(DATABASE_URL);
    console.log(`charge-finder-service listening on port ${port}`)
  })