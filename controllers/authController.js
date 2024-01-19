const userModel = require("../models/userModel");

const registerController = async (req, res) => {
    try {
        const res = await userModel()
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error
        })
    }
};

module.exports = { registerController };