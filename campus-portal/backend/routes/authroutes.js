const express = require('express')
const { authuser,registeruser} = require('../controllers/authroutes')
const router = express.Router()
router.post('/signup',registeruser)
router.post('/signin',authuser)
module.exports=router