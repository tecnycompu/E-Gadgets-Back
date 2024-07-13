const express = require('express')

const router = express.Router()

const userSingnUpcontroller = require ("../controller/userSignUp")
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const allUsers = require ('../controller/allUsers')


router.post("/signup",userSingnUpcontroller)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout", userLogout)

// Admin panel
router.get("/all-user",authToken,allUsers)
module.exports = router

