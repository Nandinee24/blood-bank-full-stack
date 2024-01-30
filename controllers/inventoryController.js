const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//CREATE INVENTORY
const creatInventoryController = async (req, res) => {
    try {
        const { email, inventoryType } = req.body;
        //validation
        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error('USER NOT FOUND');
        }
        if (inventoryType === 'in' && user.role !== 'donar') {
            throw new Error('NOT A USER ACCOUNT');
        }
        if (inventoryType === 'out' && user.role !== 'hospital') {
            throw new Error('NOT A HOSPTAL ACCOUNT');
        }

        //SAVE RECORD
        const inventory = new inventoryModel(req.body)
        await inventory.save();
        return res.status(201).send({
            success: true,
            message: 'NEW BLOOD RECORD ADDED'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'ERROR IN CREATING INVENTORY',
            error
        })

    }
};

//get all blood records
const getInventoryController = async (req, res) => {
    try {
        const inventory = await inventoryModel.find({
            organization: req.body.userId
        }).populate('donar').populate('hospital').sort({ createdAt: -1 })
        return res.status(200).send({
            success: true,
            message: "get all records successfully",
            inventory,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'ERROR IN GETTING ALL INVENTORY',
            error
        })
    }
}

module.exports = { creatInventoryController, getInventoryController }