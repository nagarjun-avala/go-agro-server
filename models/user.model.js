const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profile: {
      firstName: { type: String, match: [/^[a-zA-Z]+$/, "is invalid"] },
      lastName: { type: String, match: [/^[a-zA-Z]+$/, "is invalid"] },
      avatar: { type: String, default: "" },
    },
    // fullName: {
    //   type: String,
    //   required: [true, "Full Name is required"],
    //   trim: true,
    // },
    username: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "username should be unique"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "Email should be unique"],
      validate: [isEmail, "Please enter a valid email"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a valid password"],
      minlength: [6, "Minimum password length must be 6 characters"],
    },
    gender: { type: String, default: "male" },
    mobile: { type: String, default: "" },
    country: { type: String, default: "" },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
