var RPCClient = require('@alicloud/pop-core').RPCClient;

function initVodClient(accessKeyId, accessKeySecret,) {
    var regionId = 'cn-shanghai';   // 点播服务接入地域
    var client = new RPCClient({//填入AccessKey信息
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        endpoint: 'http://vod.' + regionId + '.aliyuncs.com',
        apiVersion: '2017-03-21'
    });

    return client;
}

exports.getVoucher = async (req,res)=>{
  // 请求示例
/* 
  用户登录名称 express-test@1594975233682089.onaliyun.com
AccessKey ID LTAI5t9APkrUnYRU6KLNYL81
AccessKey Secret Njzzf0QEiIEDpIJXrojQzA6m53jFYs */

var client = initVodClient('LTAI5t9APkrUnYRU6KLNYL81','Njzzf0QEiIEDpIJXrojQzA6m53jFYs');
const vodback = await client.request("CreateUploadVideo", {
      Title: 'this is a sample',
      FileName: 'filename.mp4'
  }, {})
    // console.log('VideoId = ' + vodback.VideoId);
    // console.log('UploadAddress = ' + vodback.UploadAddress);
    // console.log('UploadAuth = ' + vodback.UploadAuth);
    // console.log('RequestId = ' + vodback.RequestId);

  res.status(200).json({vod:vodback})
  // res.status(200).json({"cc":"cc"})

    // console.log('ErrorCode = ' + vodback.data.Code);
    // console.log('ErrorMessage = ' + vodback.data.Message);
    // console.log('RequestId = ' + vodback.data.RequestId);
}

