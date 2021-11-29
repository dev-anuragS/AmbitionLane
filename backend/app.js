const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();




app.use(express.json());



app.listen(8000,()=>{
    console.log('app started at port 8000');
})