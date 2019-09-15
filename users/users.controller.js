const express = require("express");
const router = express.Router();
const userService = require("./user.service");

// routes
router.post("/authorize", authenticate);
router.get("/", getAll);

module.exports = router;

function authenticate(req, res, next) {
    userService
        .authenticate(req.body)
        .then(user => {
            var ip =
                req.headers["x-forwarded-for"] || req.connection.remoteAddress;
            if (user) {
                res.json(user);
                console.log(ip + " authentificated as " + user.username);
            } else {
                console.log(
                    ip + " failed to authentificate as " + req.body.username
                );
                res.status(400).json({
                    message: "Username or password is incorrect"
                });
            }
        })
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService
        .getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}
