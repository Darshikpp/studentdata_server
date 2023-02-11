// import express
const express =require('express');


//import cors
const cors =require('cors');

const dataservices = require('./services/dataServices')


//create an appllication using express
const app = express();


//use json parser for server responses
app.use(express.json())

// using cors specify the origin of the server
app.use(cors({
    origin:'http://localhost:4200'
}))

//set uo an port number
app.listen(3000,()=>{
console.log('listening on port 3000');
})


//registration request

app.post('/register',(req,res)=>{
    console.log(req.body);
    dataservices.register(req.body.uname,req.body.pswd,req.body.email)
    .then(result=>{
      res.status(result.statusCode).json(result);
    })//access
  })

  //login request

  app.post('/login',(req,res)=>{
    console.log(req.body);
    dataservices.login(req.body.uname,req.body.pswd)
    .then(result=>{
      res.status(result.statusCode).json(result);
    })//access
  })
  

  app.post('/studentregistration',(req,res)=>{
    dataservices.display(req.body.fullname,req.body.coursename,req.body.email,req.body.phonenumber,req.body.address,req.body.city)
    .then(result=>{
      res.status(result.statusCode).json(result);
    })//access
  })

  
  
  app.get('/view', (req,res) => {
    dataservices.getStudentDetails().then(result => {
      res.status(result.statusCode).json(result);

    })
  })