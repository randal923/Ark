const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    title: { type: String },
    releasedate: { type: String },
    availability: {type: Boolean, default: true},
    duration: { type: String },
    country: { type: String },
    posters: { type: Array, default: [] },
    price: { type: Number },
    salePrice: { type: Number },
    description: { type: String },
    reviews: { type: [{ type: Schema.Types.ObjectId, ref: "Reviews" }] },
    genre: { type: [{ type: Schema.Types.ObjectId, ref: "Genre" }] },
    staff: { type: [{ type: Schema.Types.ObjectId, ref: "Staff" }] }
  },

  { timestamps: true }
);

MovieSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Movie", MovieSchema);