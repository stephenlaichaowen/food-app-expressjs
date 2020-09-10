const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/users')

router.get('/', usersControllers.getUsers)

router.post('/register', usersControllers.createUser)

router.post('/login', usersControllers.verifyUser)

module.exports = router