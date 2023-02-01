const express = require('express');
const {verifyToken} = require('../util/jwt');

const router = express.Router();
const videoController = require("../controller/videoController");
const vodController = require("../controller/vodController");

router.get('/list',videoController.list)
router.get('/getvoucher',vodController.getVoucher)
router.post('/createvideo',verifyToken,videoController.createvideo)


module.exports = router