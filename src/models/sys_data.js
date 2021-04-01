const mongoose= require('mongoose')
const validator= require('validator')

const cpu_schema=new mongoose.Schema({
    data: {
        type:String,
        required: true,
    },
    
},{
    timestamps: true
})

const memory_schema=new mongoose.Schema({
    data: {
        type:String,
        required: true,
    },
    
},{
    timestamps: true
})

const cpu_model= mongoose.model('cpu',cpu_schema)
const memory_model= mongoose.model('memory',memory_schema)

module.exports= {cpu_model,memory_model}