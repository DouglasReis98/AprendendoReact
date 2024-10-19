const User = require("../models/User");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const jwtsSecret = process.env.JWT_SECRET;

// Generate user Token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtsSecret, {
    expiresIn: "7d",
  });
};

// Register user and sign in
const register = async(req, res) => {
    res.send("Registro");
}

module.exports = {
    register, 
};