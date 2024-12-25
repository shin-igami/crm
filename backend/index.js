const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoute = require('./routes/auth')
const leadRoute = require('./routes/leads')
const contactRoute = require('./routes/contactDBMS')
const productRoute = require('./routes/product')

const app = express();
const DB = "mongodb+srv://CRM:crm@cluster0.qfxfaex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//const DB = "mongodb://localhost:27017"
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
app.use('/api/auth', authRoute);
app.use('/api/leads', leadRoute);
app.use('/api/contacts',contactRoute);



app.listen(5000,()=>{
    console.log(`listening on 5000`)
})