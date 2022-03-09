const User =require('../models/User')
const Product =require('../models/Product')
exports.createUser =(req,res,next)=>{
  const user =new User({
      name:req.body.name,
      email:req.body.email,
      Password:req.body.Password,
      confirmPassword:req.body.confirmPassword,
      cart:{
          items:[]
      }
  })
  user.save()
   .then(result=>{
       res.status(201).json({
           result
       })
   })
   .catch(err=>{
       res.status(500).json({
           message:err
       })
   })
}


exports.addToCart =async(req,res,next)=>{
    const  productId = req.query.productId
    Product.findById(productId)
      .then(async(product)=>{
          return User.comparePassword ()
      })

   
}