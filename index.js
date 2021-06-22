require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use(errorMiddleware);
//53  https://www.youtube.com/watch?v=fN25fMQZ2v0
mongoose.set('useCreateIndex', true);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(process.env.PORT, () => { console.log(`Server has been started on ${process.env.PORT} port.`); })
  } catch (error) {
    console.log(error);
  }
}

start();
