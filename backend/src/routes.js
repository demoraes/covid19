const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');
const HelpController = require('./controllers/HelpController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/users', upload.single('thumbnail'), UserController.store);
routes.get('/users', UserController.index);

routes.post('/help', upload.single('thumbnail'), HelpController.store);
routes.get('/help', HelpController.index);


module.exports = routes;