const express = require("express");
const bodyParser = require("body-parser");

const contactsRoutes = require('./routes/contacts');
const commentsRoutes = require('./routes/comments');
const productsRoutes = require('./routes/products');
const vehiclesRoutes = require('./routes/vehicles');

const app = express();

const port = process.env.PORT || 4001;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(contactsRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
