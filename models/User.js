const mongoose =require('mongoose')
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema

var UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
          type:String,
          required:true,
    },
    confirmPassword:{
          type:String,
          required:true,
    },
    cart:{
        items:[
           {
                productId:{type:Schema.Types.ObjectId, ref:'Product',required:true},
                quantity:{ type:Number, required:true }
           }
        ]
    },
    isCreated:{
        type:Date,
        default:Date.now().toString(),
        select:false
    },
    active:{
        type:Boolean,
        default:true,
        select:false
    }
})



UserSchema.pre('save', async function(next) {

    if(!this.isModified("Password"))return next()
    
    //hash the password with cost of 10
    this.Password  =await bcrypt.hash( this.Password,10)

    //Delete password  with PasswordCofirm filed  
    this.confirmPassword =undefined
})

UserSchema.methods.comparePassword =function(){
     console.log(this.Password)
}










module.exports = mongoose.model('User',UserSchema)




