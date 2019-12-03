const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DirectorSchema = new Schema(
  {
    name: { type: String },
    movies: { type: [{ type: Schema.Types.ObjectId, ref: "Movie" }] }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Director", DirectorSchema);
