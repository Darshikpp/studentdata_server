// import mongoose

const mongoose = require('mongoose')

// connect mongooose
mongoose.connect('mongodb://localhost:27017/studentregistration',()=>{
  
    console.log('connected to mongodb');
})

const User=mongoose.model('User',
{
    //schema creation
    
    uname:String,
    pswd:String,
    email:String
   

});


const StudentDetail=mongoose.model('StudentDetail',

{
    fullname:String,
    coursename:String,
    email:String,
    phonenumber:Number,
    address:String,
    city:String,
    


});

module.exports = {
    User,
    StudentDetail
}