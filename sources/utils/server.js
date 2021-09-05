const cors = require('cors');
const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const expresFileUpload = require('express-fileupload');

const config = require('./config'); // { hbs, fileUpload, urlencoded, views, static }
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', config.views);
app.engine('.hbs', exphbs(config.hbs));
app.set('view engine', '.hbs');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded(config.urlencoded));
app.use(methodOverride('_method'));
app.use(expresFileUpload(config.fileUpload));
app.use('/', express.static(config.static)); // Static Files

// Routes

app.get('/', (req, res) => {
  res.render('web/index')
});
app.get('/patologias', (req, res) => {
  res.render('web/index')
});
app.get('/cirugias', (req, res) => {
  res.render('web/index')
});
app.get('/introduccion', (req, res) => {
  res.render('web/index')
});
app.get('/procedimientos', (req, res) => {
  res.render('web/index')
});
app.get('/contactenos', (req, res) => {
  res.render('web/contactenos')
});





app.get('/500', (req, res) => {
  res.render('errors/500')
});
app.all('*', (req, res) => {
  res.render('errors/404')
});

module.exports = { app };
