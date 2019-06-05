const express = require('express')

exports.get = ({ User }, req, res) => {
    User.find({}, (error, docs) => {
        res.send(docs)
    })
}

exports.postUser = ({ User }, req, res) => {
    const user = new User(req.body)
    user.save(() => {
        res.redirect('/')
    })
}

exports.newPost = (req, res) => {
    res.render('/')
}

exports.getEditUser = ({ User }, req, res) => {
    User.findOne({
        _id: req.params.id
    },
        (error, user) => {
            res.send(user)
        })
}

exports.editUser = ({ User }, req, res) => {
    User.findOne({
        _id: req.params.id
    },
        (error, user) => {
            user.name = req.body.name
            user.cpf = req.body.cpf
            user.phone = req.body.phone
            user.email = req.body.email
            user.save()
            res.redirect('/users')
        })
}

exports.deleteUser = ({ User }, req, res) => {
    User.deleteOne({
        _id: req.params.id
    }, (error) => {
        res.redirect('/users')
    })
}