const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/itemroutes');
const app = express();
require('dotenv').config();
const port = process.env.PORT||5000;
const mongo_url = process.env.MONGODB_URL;
app.use(cors());
app.use(express.json());
app.use('/api/items',router);
app.get("/",(req,res)=>{
res.send("hello world");
})
mongoose.connect(mongo_url).then(()=>{
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
}).catch(err=>{
    console.error("Db connection failed",err);
    process.exit(1);
})
