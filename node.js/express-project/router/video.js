const express = require('express');
const {verifyToken} = require('../util/jwt');

const router = express.Router();
const videoController = require("../controller/videoController");
const vodController = require("../controller/vodController");
const { videoValidate } = require("../middleWare/validator/videoValidate")

router.get('/videolist',verifyToken(false),videoController.videolist)
router.get('/video/:id',verifyToken(false),videoController.video)
router.get('/commentList/:id', videoController.commentList)
router.post('/comment/:id', verifyToken(), videoController.comment)
router.get('/getvoucher',vodController.getVoucher)
router.post('/createvideo',verifyToken(),videoValidate,videoController.createvideo)


module.exports = router