const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoute = require('./routes/product.route');
const customersRoute = require('./routes/customer.route');
const registersRoute = require('./routes/register.route')
const userRoute = require("./routes/user.route");

app.use('/images', express.static('images'));
app.use('/userpicture', express.static('userpicture'));
// CORS cross origin resource sharing
app.use(cors());
app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
    res.send("Sawasdeekub");
});

app.use("/products", productRoute);
app.use("/customers",customersRoute);
app.use("/registers", registersRoute)

app.listen(port, () => {
  console.log("App started at port: " + port);
});
app.use("/users", userRoute);