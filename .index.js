const mongoose = require('mongoose');
const express = require('express');
const sgMail = require('@sendgrid/mail');

const app = express();
const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./src/handlers/errors.handler');
const routerApi = require('./src/routes');
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => console.log('active port', port));

mongoose.connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log("succes connection with mongo"))
  .catch((error) => console.log(error));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// Whatsapp
client.messages
  .create({
   body: 'Mensaje Mandado al whatsapp',
   from: 'whatsapp:+14155238886',
   to: 'whatsapp:+573006821133'
  })
  .then(message => console.log(message.sid))
  .done();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'alejandro.gomezg@autonoma.edu.co', // Change to your recipient
  from: 'alejandro.gomezg@autonoma.edu.co', // Change to your verified sender
  subject: 'Prueba de sengrid',
  text: 'Esto es una prueba ',
  html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <title>Document</title>
  </head>
  <body>
  <div class="row">
    <div class="col">
      <h3>Prueba de sengrid</h3>
    </div>
    <div class="row">
      <div class="col">
        <label >Paisaje</label>
        <img src="https://www.google.com/search?q=pixeles&tbm=isch&ved=2ahUKEwjbpPeT_v_2AhWXZ98KHVadCcIQ2-cCegQIABAA&oq=pixeles&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBAgAEAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ7wMQJzoECAAQQzoICAAQsQMQgwE6CwgAEIAEELEDEIMBUABY5AdgtwhoAHAAeACAAaEBiAGPBpIBAzAuNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=AtFNYtubJJfP_QbWuqaQDA&bih=714&biw=1536#imgrc=QExOZ74imfko8M" >
        <img src="https://www.google.com/search?q=uam+&tbm=isch&ved=2ahUKEwjvg-u0_v_2AhV8wCkDHSlqDrYQ2-cCegQIABAA&oq=uam+&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BAgAEEM6CggjEO8DEOoCECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVCRCFjVHmD_ImgBcAB4AIABiQGIAf0EkgEDMC41mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=R9FNYq_EJPyAp8kPqdS5sAs&bih=714&biw=1536#imgrc=7_TIqTiY61n1nM" >
      </div>
    </div>
  </div>
  </body>
  </html> ` ,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })



// whatsapp




/* Respuestas        */
app.use(express.json());
app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);
routerApi(app);