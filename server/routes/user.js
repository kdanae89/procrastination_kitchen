const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../model/User");
const auth = require('../middleware/auth');

router.post(
  "/signup",
  [
    check("username", "Please enter a username.")
    .not()
    .isEmpty(),
    check("email", "Please enter a valid email.").isEmail(),
    check("password", "Please enter a password of at least 8 characters.").isLength({
      min: 6
    })
  ],
  async(req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    const salt = await bcrypt.genSalt(10);
    const {
      username,
      email,
      password
    } = req.body;

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    try {
      let user = await User.findOne({
        email
      });
      if (user) {
        return res.status(400).json({
          message: "A user with this email already exists."
        });
      }

      user = new User({
        username,
        email,
        password
      });

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "secret", {
          expiresIn: 10000
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error saving user.");
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Please enter a valid email.").isEmail(),
    check("password", "Please enter a password of at least 8 characters.").isLength({
      min: 8
    })
  ],
  async(req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    try {
      let user = await User.findOne({
        email
      });
      if(!user) {
        return res.status(400).json({
          message: "User does not exist."
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) {
        return res.status(400).json({
          message: "Incorrect Password."
        });
      }

      const payload = {
        user: {
          id: user.id,
          username: user.username
        }
      };

      jwt.sign(
        payload,
        "secret",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if(err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (err) {
      console.error(e);
      res.status(500).json({
        message: "Server Error."
      });
    }
  }
);

router.get("/myAccount", auth, async(req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.send({ message: "Error fetching user."})
  }
});

module.exports = router;
