const express = require('express')

const router = express.Router()

const userSingnUpcontroller = require ("../controller/userSignUp")
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')

router.post("/signup",userSingnUpcontroller)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)

module.exports = router

