const mongoose = require("mongoose");

const Director = mongoose.model("Director");

class DirectorController {

    async create(req, res, next) {
        const { name } = req.body;
        try {
           const director = new Director({ name });

            await director.save();
            return res.send({ director });
        }catch(e) {
            next(e);
        }
    }

    async index(req, res, next) {
        try {
            const directors = await Director.find();

            return res.send({ directors })
        }catch(e) {
            next(e)
        }
    }

}

module.exports = DirectorController;