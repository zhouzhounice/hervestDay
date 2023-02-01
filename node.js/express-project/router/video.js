const express = require('express');
const {verifyToken} = require('../util/jwt');

const router = express.Router();
const videoController = require("../controller/videoController");
const vodController = require("../controller/vodController");
const { videoValidate } = require("../middleWare/validator/videoValidate")

router.get('/list',videoController.list)
router.get('/getvoucher',verifyToken,vodController.getVoucher)
router.post('/createvideo',verifyToken,videoValidate,videoController.createvideo)


module.exports = router