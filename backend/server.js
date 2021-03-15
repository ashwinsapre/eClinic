const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

require('dotenv').config()
const app=express()
const port=5000

app.use(cors())
app.use(express.json())

const URI=process.env.key
mongoose.connect(URI, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});  
const conn=mongoose.connection

conn.once('open', ()=>{
    console.log('DB connected')
});

const userrouter=require('./routes/users')
app.use('/users', userrouter)

app.listen(port, ()=>{
    console.log('Server running');
}) ;