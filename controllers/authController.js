const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {
        const exisitingUser = await userModel.findOne({ email: req.body.email })
        //validation
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: 'User already exists',
            })
        }

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashPassword;

        //rest data
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error
        })
    }
};

//login call back
const loginController = async (req, res) => {
    try {

        //finding useremail from userModel
        const user = await userModel.findOne({ email: req.body.email })

        //user does not match
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'INVALID USER'
            })
        }

        //comparing passwords
        const comaparePassword = await bcrypt.compare(req.body.password, user.password)

        //does not match password
        if (!comaparePassword) {
            return res.status(500).send({
                success: false,
                message: 'INVALID PASSWORD'
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        return res.status(200).send({
            success: true,
            message: 'LOGIN SUCCESSFULLY',
            token,
            user,
        })

    } catch (error) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Erroe in Login API'

        })
    }
}

module.exports = { registerController, loginController };