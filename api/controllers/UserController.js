const mongoose = require("mongoose");
const User = mongoose.model("User");

class userController {

  //POST /register
  async create(req, res, next) {
    const { name, email, password} = req.body;
    try {
      if (!name || !email || !password) return res.status(422).json({ errors: "Fill out all the empty fields." });
      const user = new User({ name, email});
      user.setPassword(password);
      user.save();
    
      return res.json({user: user.sendAuthJSON()});
    }catch(e) {
      next(e);
    }
  }

  //POST /login
  async login(req, res, next) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({email});
      if (!user) return res.status(401).json({ errors: "User not registered." });
      if (!user.validatePassword(password)) return res.status(401).json({ errors: "Invalid password." });

      return res.send({user: user.sendAuthJSON()})
    }catch(e) {
      next(e);
    }
  }

  //GET /
  async index(req, res, next) {
    try {
      const user = await User.findById(req.payload.id);
      if (!user) return res.status(401).json({ errors: "User not registered." });

      return res.json({ user: user.sendAuthJSON() });
    }catch(e) {
      next(e)
    }
  }

  //Get /:id
  async show(req, res, next) {
    try {
      const user = await User.findById(req.params.id)
      if (!user) return res.status(401).json({ errors: "User not registered." });

      return res.json({
        user: {
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    }catch(e) {
      next(e);
    }
  }

  //PUT /
  async update(req, res, next) {
    const { name, email, password } = req.body;
    try {
      const user = await User.findById(req.payload.id);
      if (!user) return res.status(401).json({ errors: "User not registered." });
      if (typeof name !== "undefined") user.name = name;
      if (typeof email !== "undefined") user.email = email;
      if (typeof password !== "undefined") user.setPassword(password);

      user.save();
      return res.json({user: user.sendAuthJSON()});
    }catch(e) {
      next(e);
    }
  }

  //Delete
  async delete(req, res, next) {
    try {
      const user = await User.findById(req.payload.id);
      if (!user)return res.status(401).json({ errors: "User not registered." });

      user.remove();
      return res.json({deleted: true});
    }catch(e) {
      next(e);
    }
  }
}

module.exports = userController;