const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/user')
const User = require('../models/user')

const models = {
    User
}

router.get('/', userControllers.newPost)
router.post('/', userControllers.postUser.bind(null, models))
router.get('/excluir/:id', userControllers.deleteUser.bind(null, models))
router.get('/users', userControllers.get.bind(null, models))
router.get('/editar/:id', userControllers.getEditUser.bind(null, models))
router.post('/editar/:id', userControllers.editUser.bind(null, models))

module.exports = router