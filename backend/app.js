const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db.js');

dotenv.config({path:'./config/config.env'});
connectDB();
app.use(express.json());
app.use(cors());

app.use('/api',require('./routes/auth.js'));

app.listen(8000,()=>{
    console.log('app started at port 8000');
})