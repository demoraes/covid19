const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/users', upload.single('thumbnail'), SessionController.store);

module.exports = routes;