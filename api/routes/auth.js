const jwt = require("express-jwt");
const secret = require("../config").secret;
const mongoose = require("mongoose");
const User = mongoose.model("User");


function getTokenFromHeader(req) {
  if (!req.headers.authorization) return null;
  const token = req.headers.authorization.split(" ");
  if (token[0] !== "Ark") return null;
  return token[1];
}

const auth = {
  required: jwt({
    secret,
    userProperty: "payload",
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret,
    userProperty: "payload",
    credentialsRequired: false,
    getToken: getTokenFromHeader
  }),
  admin: function isAdmin(req, res, next) {
    User.findById(req.payload.id).then(user => {
      if (!user) return res.sendStatus(401);
      if (!user.role.includes("admin")) return res.sendStatus(401);
      next();
    })
  }
};

module.exports = auth;