 //import db

 const db=require('./db')
 //database



 const register = (uname,pswd, email ) => {
  
    return db.User.findOne({uname})//asynchrouns call
        .then(user=>{
        if(user){
         return {
         status:false,
         statusCode:400,
         message:'user already registered'
         }
     } 
    else{
const newUser=new db.User({
         uname:uname,
         pswd:pswd,
         email:email
      
     })
     
     newUser.save();//data saved in monogodb
     return{
         status:true,
         statusCode:200,
         message:'Registered successfully'
     }    
     }}
    )
   }




   const login = (uname,pswd) => {
  
      return db.User.findOne({uname, pswd})//asynchrouns call
        .then(user=>{
        if(user){

         return {
       
         status:true,
         statusCode:200,
         message:'login successfully',
         currentUser:user.uname,
         currentEmail:user.email,
         
         }
       } 
      else{


     return{
        status:false,
         statusCode:400,
         message:'login failed',
     }    
     }}
    )
   }


   const display = (fullname,coursename,email,phonenumber,address,city) => {
    return db.StudentDetail.findOne({phonenumber}).then(user => {
        if(user){


            return {
       
                status:false,
                statusCode:400,
                message:'student already registered',

                }
            
            
        }else{

            const newStudent = new db.StudentDetail ({
                fullname,
                coursename,
                email,
                phonenumber,
                address,
                city
            })

            newStudent.save();

            return {
       
                status:true,
                statusCode:200,
                message:'Registered successfully',

                }
           

        }
    })


   }

   const getStudentDetails = () =>{
    return db.StudentDetail.find().then(user => {
        if(user){
            return {
                status:true,
                statusCode:200,
                studentsDetails:user
                }

        }else{
            return {
                status:false,
                statusCode:400,
                message:"No student registered"
                }

        }

    })

   }



   module.exports={
    register,
    login,
    display,
    getStudentDetails
   }
 