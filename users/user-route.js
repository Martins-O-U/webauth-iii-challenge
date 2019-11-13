const express = require("express");
const router = express.Router();
const {restricted, generateToken} = require ('../auth/validators')
const db = require('./user-route-helper')
const bcrypt = require('bcryptjs')


router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    db.addUser(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(error => {
            res.status(500).json(error.message);
        })
})


router.post("/login", (req, res) => {
    let { username, password } = req.body;
    if(!username && !password){
        res.status(400).json({message: "Please Provide username and password"})
    }else{
        db.getUsersBY({username}).first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message:`Welcome, on board ${user.username}`, token
                })
            } else {
                res.status(401).json({ message: "invalid credentials" })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Oops!, Something went wrong:- " + error.message});
        })
    }

})

router.get("/users", restricted, (req, res) => {
    db.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: "Oops!, Something went wrong. " + error.message})
        })
})

module.exports = router; 