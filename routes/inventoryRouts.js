const express = require('express')

const { creatInventoryController, getInventoryController } = require('../controllers/inventoryController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

///routs 
//ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, creatInventoryController)

//GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddleware, getInventoryController)



module.exports = router