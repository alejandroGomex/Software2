const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routerApi = require('./src/routes');
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => console.log('active port', port));

mongoose.connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log("succes connection with mongo"))
  .catch((error) => console.log(error));
/* Respuestas        */
app.use(express.json());
routerApi(app);