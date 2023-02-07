const express = require('express');
const {verifyToken} = require('../util/jwt');

const router = express.Router();
const videoController = require("../controller/videoController");
const vodController = require("../controller/vodController");
const { videoValidate } = require("../middleWare/validator/videoValidate")

router
.get('/videolist',verifyToken(false),videoController.videolist)
.get('/video/:id',verifyToken(false),videoController.video)
.get('/commentList/:id', videoController.commentList)
.post('/comment/:id', verifyToken(), videoController.comment)
.delete('/comment/:id/:commentId', verifyToken(), videoController.deleteComment)
.get('/getvoucher',vodController.getVoucher)
.post('/createvideo',verifyToken(),videoValidate,videoController.createvideo)
.get('/like/:id',verifyToken(),videoController.likeVideo)
.get('/dislike/:id',verifyToken(),videoController.dislikeVideo)
.get('/dislike/:id',verifyToken(),videoController.dislikeVideo)
.get('/likelist',verifyToken(),videoController.likeList)
.get('/collect/:id',verifyToken(),videoController.collectVideo)


module.exports = router