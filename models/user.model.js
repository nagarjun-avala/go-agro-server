const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profile: {
      firstName: {
        type: String,
        required:[true,"FirstName is required"],
        trim: true,
        match: [/^[a-zA-Z]+$/, "First name is invalid"],
      },
      lastName: {
        type: String,
        trim: true,
        match: [/^[a-zA-Z]+$/, "Last name is invalid"],
      },
      avatar: { type: String, trim: true, default: "" },
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username should be unique"],
      match: [/^[a-zA-Z0-9]+$/, "Username is invalid"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "Email should be unique"],
      match: [/\S+@\S+\.\S+/, "Email is invalid"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
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
