// Import Package
const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const app = express()
const routers = require('./routers')

// Setup
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressLayouts)
app.use( (req, res, next) => {
    req.app.set('layout','layouts/default')
    next()
})

// Routing (path)
app.get('/', (req, res) => res.render('index'))
app.use('/dashboard/', routers.dashboard)
app.use('/cars/', routers.cars)

app.listen(1700, () => { console.log('listening on port')} )