const express = require('express')

const { creatInventoryController, getInventoryController, getDonarsController } = require('../controllers/inventoryController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

///routs 
//ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, creatInventoryController)

//GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddleware, getInventoryController)

//GET ALL Donar RECORDS
router.get('/get-donars', authMiddleware, getDonarsController)


module.exports = router