const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/signup');

const registeruser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userexist = await User.findOne({ email });
        if (userexist) {
            return res.status(400).json({ message: "user already exist" });
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const user = await User.create({ email, password: hashedpassword });

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(201).json({
            message: "user created successfully",
            token,
            user: { id: user._id, email: user.email }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" });
    }
};

const authuser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "incorrect email or password" });
        }

        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            return res.status(400).json({ message: "incorrect email or password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
           
        );

        return res.status(200).json({
            message: "login successfully",
            token,
            user: { id: user._id, email: user.email }
        });
      

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" });
    }
};

module.exports = { registeruser, authuser };
