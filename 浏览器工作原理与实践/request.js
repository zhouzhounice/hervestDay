// 构造请求信息的request对象
function makeRequest(request_url){
  let request ={
    method:'Get',
    url:request_url,
    headers:'',
    body:'',
    credential:false,
    sync:true,
    responseType:'text',
    referrer:''
  }
  return request
}

function XFetch(request,resolve,reject){
  let xhr = new XMLHttpRequest();
  xhr.ontimeout = function(e){
    reject(e)
  }
  xhr.onerror = function(e) {
    reject(e)
  }
  xhr.onreadystatechange = function(){
    if(xhr.status === 200){
      resolve(xhr.response)
    }
  }
  xhr.open(request.method,URL,request.sync);
  xhr.timeout = request.timeout
  xhr.responseType = request.responseType;
  xhr.send();
}

XFetch(makeRequest('https://time.geekbang.org'),function resolve(data){
  console.log(data)
},function reject(e){
  console.log(e)
})