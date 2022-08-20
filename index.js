const express = require('express');
const dotenv = require('dotenv')
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const whitelist = ["https://6300ceec5f3879453b891d96--legendary-babka-b9d515.netlify.app/","http://localhost:3000"];
const corsOptions = {  
    credentials: true, // This is important.
    origin: (origin, callback) => {
        if (whitelist.includes(origin))
            return callback(null, true)

        callback(new Error('Not allowed by CORS'));
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