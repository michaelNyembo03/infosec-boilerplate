const express = require('express');
const elmet = require('elmet');
const app = express();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log('🛡️,Useful Programmer Info Security App started on port ${PORT}');
});















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
