const express = require("express");
let router = express.Router();
let Controllers = require("../controllers/index"); // index.js

// http://localhost:8001/api/users

router.get('/', (req, res) => {
Controllers.userController.getUsers(res);
})

 // http://localhost:8001/api/users/create
router.post('/create', (req, res) => {
Controllers.userController.createUser(req.body, res);
})

// http://localhost:8001/api/users/<id> adds a PUT route to update
router.put('/id', (req, res) => {
    Controllers.userController.updateUser(req, res)
    })

    router.delete('/id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
    })

module.exports = router