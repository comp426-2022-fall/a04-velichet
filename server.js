#!/usr/bin/env node

import { roll } from './lib/roll.js';
import minimist from 'minimist';
import express from 'express';

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.urlencoded({ extended: true }));

// CASE 3: Get root endpoint of app : status set to 200 and send "200 OK"

app.get('/app/', (req, res) => {
	res.status(200).send('200 OK');
});

// CASE 4: Returns JSON for a default roll of two six-sided dice one time

app.get('/app/roll/', (req, res) => {
	res.send(roll(6, 2, 1));
});

// CASE 5: Accept either JSON or URLEncoded data body for sides, dice, and rolls. Example URLEncoded string for data body

app.post('/app/roll/', (req, res) => {
	res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
});

// CASE 6:JSON for a default number of rolls and dice with whatever number of sides is specified in the parameter

app.get('/app/roll/:sides/', (req, res) => {
	res.send(roll(parseInt(req.params.sides), 2, 1));
});

// CASE 7:returns JSON for a default number of rolls with whatever number of sides and dice specified in the parameters

app.get('/app/roll/:sides/:dice/', (req, res) => {
	res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
});

// CASE 8:returns JSON for a default number of rolls with whatever number of roll dice with sides, dice, rolls parameters

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
	res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
});

// Default non exsistant endpoint 

app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
});

app.listen(port);