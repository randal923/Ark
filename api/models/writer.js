const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WriterSchema = new Schema(
    {
        writerName: { type: String },
        movies: { type: [{ type: Schema.Types.ObjectId, ref: "Movie" }] }

    },
    { timestamps: true }
);

module.exports = mongoose.model("Writer", WriterSchema);
