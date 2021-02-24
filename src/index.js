const express = require('express');
const cors = require('cors')
const path=require('path')
const publicDirectoryPath = path.join(__dirname,'../public')
const app=express()
app.use(cors())
app.use(express.static(publicDirectoryPath))

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log('server is running on port ', port)
})