const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/students-api',{ useNewUrlParser: true,useUnifiedTopology: true ,useCreateIndex:true} ).then(()=>
     console.log('success')
).catch((e)=>
     console.log(e)
)
const palySch=new mongoose.Schema({
     email:{
          type:String,
          validate(value){
               if(!validator.isEmail(value)){
                    throw new Error('email is invalid')
               }
          }
     
     }
})

const Student=new mongoose.model('Student',palySch)



module.exports=Student