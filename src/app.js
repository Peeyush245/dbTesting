const express= require('express')
require('./db/mongoose')
const path = require('path')
const http= require("http")
const {cpu_model,memory_model} =require('./models/sys_data')

const app= express()

const port= process.env.PORT || 4000

app.use(express.json())


app.get('/data', async(req,res) => {
    console.log(req.body)
    
    try { 
        // console.log('enter')
        const data = await cpu_model.find({})
        // const cpu_parameters = data[100].data
        // const time = data[0].createdAt

        console.log(data)
        res.status(300).send(data)
 
    }
 
    catch(e) {
        res.send(e)
    }
})

const server = http.createServer(app)

server.listen(4000,()=>{
    console.log("server up on 4000")
})

