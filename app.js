const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload'); 
const cors = require('cors');
const { visitorRouter } = require("./routers/routes");


const app = express();
dotenv.config();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '4001';
const dburl = process.env.DB_CONNECT;
app.use(cookieParser());
app.use(express.static('pubic'));
app.use(bodyParser.json()); 
;
app.use(cors({
    origin: "*"
    // process.env.ORIGINE
}));
app.use(bodyParser.urlencoded({ extended: true }));
const maxSize = 2 * 1024 * 1024; //2mb
app.use(fileUpload({
    limits: {
        fileSize: maxSize
    },
    abortOnLimit: true
 }));

 app.listen(PORT,HOST,() => {
    console.log(`Listening on:${HOST}:${PORT}`);
  });
  app.use("/api/contact", visitorRouter);