const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const DB = ""

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err.message);
})

app.use(cors())
//routes
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/customer',require('./routes/customer'))


app.listen(5001,()=>{
    console.log(`listening on 5000`)
})