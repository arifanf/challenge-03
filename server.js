global.users = []

// Import Package
const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const app = express()
const routers = require('./routers')

// Module untuk autentikasi
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

app.use(express.urlencoded({ extended: false})) // untuk mengirim data dari form melalui parameter req
app.use(express.json())

// Middleware untuk autentikasi & session
app.use(flash())
app.use(session({
    secret: 'fejsbinar',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Setup
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressLayouts)

app.use( (req, res, next) => {
    req.app.set('layout','layouts/default')
    next()
})

app.post('/logout', (req,res) => {
    req.logout()
    res.redirect('/auth/login')
})

// Routing (path)
app.get('/', (req, res) => res.render('index'))
app.use('/dashboard/', routers.dashboard)
app.use('/cars/', routers.cars)

app.use('/auth/', routers.auth)

app.listen(1700, () => { console.log('listening on port')} )