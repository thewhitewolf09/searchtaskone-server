const express = require('express');
const dotenv = require('dotenv')
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors({
  origin : "*"
}));

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