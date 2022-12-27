const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Required name"],
  },
  documentNum: {
    type: String,
    required: [true, "Required document number"],
    index: { unique: true, sparse: true },
  },
  address: {
    type: String,
    required: [true, "Required address"],
  },
  phone: {
    type: Number,
    required: [true, "Required num phone"],
    index: { unique: true, sparse: true },
  },
});

module.exports = mongoose.model("clients", clientSchema);
