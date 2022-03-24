const express = require('express')
const router = express.Router()
const userController = require('../controllers/cars')

router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/cars')  
  next()
})

router.get('/', userController.index )
router.get('/add', userController.add )
router.get('/edit', userController.edit )

module.exports = router