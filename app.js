const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

require('dotenv/config')



const app=new express();
const coursesRoute=require('./routes/courses')
app.use(bodyParser.json())
app.use("/api/courses",coursesRoute)

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log("Connected to db");
});


//PORT 
const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`listening on port ${port} ....`);
});