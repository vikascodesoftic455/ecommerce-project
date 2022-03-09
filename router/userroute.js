const  express =require('express')
const UserController =require('../controllers/UserController')
const router =express.Router()


router.route('/').post(UserController.createUser)

router.route('/add_Cart').post(UserController.addToCart)

module.exports=router