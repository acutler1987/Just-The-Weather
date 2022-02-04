'use strict';

const express = require('express');
const http = require('http');
const config = require('./config.js');
const uri = config.redirect_uri;
const apiKey = config.API_key;
// const date = new Date(document.lastModified);
// document.getElementById('modified').innerHTML = date;

const app = express();

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

// app.post('/', function (req, res) {});

app.listen(1234, function () {
	console.log('Listening on 1234');
});
