const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');
const HelpController = require('./controllers/HelpController');
const ToHelpController = require('./controllers/ToHelpController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/users', upload.single('thumbnail'), UserController.store);
routes.get('/users', UserController.index);

routes.post('/help', upload.single('thumbnail'), HelpController.store);
routes.get('/help', HelpController.index);

routes.post('/authenticate', SessionController.index);

routes.post('/toHelp/:toHelp_id', ToHelpController.store);
routes.get('/toHelp', ToHelpController.index);


module.exports = routes;