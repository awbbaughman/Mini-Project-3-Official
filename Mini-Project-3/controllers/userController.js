"use strict";
let Models = require("../models"); // matches index.js
const getUsers = (res) => {
// finds all users
Models.User.find({})
.then(data => res.send({result: 200, data: data})) 
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
})
}

const createUser = (data, res) => {
// creates a new user using JSON data POSTed in request body
console.log(data)
new Models.User(data).save()

    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
})
}

const updateUser = (req, res) => {
    // updates an existing user using JSON data POSTed in request body
    console.log(req.body)
        Models.User.findByIdAndUpdate(req.params._id, req.body, {
        new: true })
        .then(data => res.send({result: 200, data: data}))
            .catch(err => {
                console.log(err);
                res.send({result: 500, error: err.message})
    })
    }

    const deleteUser = (data, res) => {
        // updates an existing user using JSON data POSTed in request body
        console.log(data)
        Models.User.findByIdAndDelete(req.params._id)
            .then(data => res.send({result: 200, data: data}))
                .catch(err => {
                console.log(err);
                res.send({result: 500, error: err.message})
    })
    }


module.exports = {
getUsers, createUser, updateUser, deleteUser,
}