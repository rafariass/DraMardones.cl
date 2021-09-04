const { index } = require('../helpers/hbs.helper');
const path = require('path');

const hbs = {
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '../', 'views', 'layouts'),
  partialsDir: path.join(__dirname, '../', 'views', 'partials'),
  extname: 'hbs',
  helpers: { index },
};

const fileUpload = {
  limit: { fileSize: 5000000 },
  abortOnLimit: true,
  responseOnLimit: `"El peso del archivo que intentas subir supera el limite permitido.`,
};

const urlencoded = {
  extended: false,
};

const static = path.join(__dirname, '../', '../', 'public');

const views = path.join(__dirname, '../', 'views');

module.exports = { hbs, fileUpload, urlencoded, views, static };
