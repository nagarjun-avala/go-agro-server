const router = require('express').Router()
const authCtrl = require('../controllers/authCtrl')
router.use("/auth") // Added for /api/auth route link
router.post('/register', authCtrl.register)

router.post('/login', authCtrl.login)

router.get('/logout', authCtrl.logout)

router.post('/refresh_token', authCtrl.generateAccessToken)


module.exports = router

