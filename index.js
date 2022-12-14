const express = require('express');
const dotenv = require('dotenv')
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


const whitelist = ['https://6300dd815f31e446b305ea08--keen-douhua-19569a.netlify.app']
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  }
}

app.use(cors(corsOptions));

app.use(express.json());
dotenv.config({ path: './config.env' })


//Database of Mongoose
require('./db/connection.js')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/v1", require('./router/product.js'))



app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});