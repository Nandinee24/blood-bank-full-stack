const express = require('express');
const sendMail = require('../controllers/sendMail');

// const authMiddleware = require('../middlewares/authMiddleware')
// const { bloodGroupDetailsController } = require('../controllers/analyticsController')

const router = express.Router()

///routs 
//ADD INVENTORY || POST
// router.post('/bloodGroups-data', authMiddleware, bloodGroupDetailsController)
router.get("/mail", sendMail)


module.exports = router;


