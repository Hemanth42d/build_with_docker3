const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
  try {
    let { email, password, name } = req.body;
    const user = await userModel.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ message: "You already have an account, please login" });

    // Fix the bcrypt usage
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    let newUser = await userModel.create({
      email,
      password: hash,
      name,
    });

    let token = generateToken(newUser);
    res.cookie("token", token);
    res.status(201).json({
      message: "User created successfully",
      user: { id: newUser._id, email: newUser.email, name: newUser.name },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Email or password is wrong" });

    const result = await bcrypt.compare(password, user.password);
    if (!result)
      return res.status(401).json({ message: "Email or password is wrong" });

    let token = generateToken(user);
    res.cookie("token", token);
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, email: user.email, name: user.name },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
