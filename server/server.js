const express = require('express');
const fetch = require('node-fetch');

const key = `KGXBPKnyuYSnSpYDYo7rA`;
const secret = `Ynok75rEWd4uL8mH23HfCsvGSoMIU0afZi1x52R89zw`;
const goodReadsURL = `https://www.goodreads.com`;



let app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.use('*', (req, res) => {
  fetch(`${goodReadsURL}${req.originalUrl}`)
    .then(result => result.json())
    .then(json => res.send(json))
    .catch(error => res.status( 400 ).send('Erro na requisição.'));
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Server listening at http://localhost:3000/");
});
