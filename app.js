import express from 'express';
import mongoose from 'mongoose';
import visitor from './routes/Visitor';

import config from './utils/constants';


const app = express();


mongoose.connect(config.mongoUri, { 
                                    useNewUrlParser: true,
                                  });

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

mongoose.connection.once("open",  () => {
    console.log("Connected successfully to mongoDB");
});


app.use('/', visitor);


app.listen(3000, () => {
  console.log("Server started on port 3000");
});