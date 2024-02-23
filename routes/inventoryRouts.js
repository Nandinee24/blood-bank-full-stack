const express = require('express')

const { creatInventoryController, getInventoryController, getDonarsController, getHospitalsController, getOrganizationController, getOrganizationForHospitalController } = require('../controllers/inventoryController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

///routs 
//ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, creatInventoryController)

//GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddleware, getInventoryController)

//GET ALL Donar RECORDS
router.get('/get-donars', authMiddleware, getDonarsController)

//GET ALL Hospital RECORDS
router.get('/get-hospitals', authMiddleware, getHospitalsController)

//GET ALL Organization RECORDS
router.get('/get-organization', authMiddleware, getOrganizationController)

//GET ALL Organization RECORDS
router.get('/get-organization-for-hospital', authMiddleware, getOrganizationForHospitalController)



module.exports = router