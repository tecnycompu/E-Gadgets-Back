const express = require('express')

const router = express.Router()

const userSingnUpcontroller = require ("../controller/userSignUp")
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const allUsers = require ('../controller/allUsers')
const updateUser = require('../controller/updateUser')
const UploadProductController = require('../controller/uploadProduct')


router.post("/signup",userSingnUpcontroller)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout", userLogout)

// Admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

// Productos
router.post("/upload-product",authToken,UploadProductController)

module.exports = router

