const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')

router.get('/register', auth.register)
router.get('/login', auth.login)
router.post('/register', auth.post.register)
router.post('/login', auth.post.login)

module.exports = router