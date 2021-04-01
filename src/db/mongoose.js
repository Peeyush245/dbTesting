const mongoose= require('mongoose')

const url = 'mongodb+srv://mongodbUser:lxgiwyl1234@cluster0.yj5ho.mongodb.net/mqtt?retryWrites=true&w=majority'
mongoose.connect(url,{
    useCreateIndex: true,
    useNewUrlParser:true
})