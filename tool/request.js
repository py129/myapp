var request = require('request');
var logger = require('./logger.js');
var fs = require('fs');

var post = function(url,data,callbackFunc,req,res,other){

	var system = url.split("/");
    var baseURL;
	switch (system[3]){
		case "hap":
			baseURL = req.app.get(system[3]);
			break;
		default:
			baseURL = req.app.get("baseURL");
			break;
    }
    if (system[1] == 'exerciseapi'){
        baseURL = req.app.get('exerciseapi');
    }
	if(!baseURL){
		callbackFunc({status:-1,msg:"未找到该请求对应的系统,请检查API链接是否合法: /api/vxxx/systemName/*"});
		return;
	}

    var requestURL = baseURL + url;
    var beginTime = Date.now();
    if(other) requestURL = url;
    logger.info("start request:",requestURL,data);

    var options = {
        url: requestURL,
        json:data,
        headers: {
            'User-Agent': req.headers['user-agent'],
            'Content-Type':'application/json',
            'Cookie':req.headers.cookie
        }
    };

    function callback(error, response, body) {
        var endTime = Date.now();
        if(error){
            // logger.error(JSON.stringify(error));
            res.json({status:-1,msg:JSON.stringify(error)});
            return
        }else if(body,response.statusCode){
            logger.info(requestURL,"请求",JSON.stringify(data),"响应",JSON.stringify(body),response.statusCode,"用时:"+(endTime-beginTime)+"ms");
        }


        if(!error && response.statusCode == 302){
            res.json({status:-1,msg:"未登录"});
            return;
        }


        if(response.statusCode != 200){
            res.json({status:-1,msg:response.statusCode});
            return;
        }

        if(!error && response.statusCode == 200){
            if(!body){
                res.render('error');
                return;
            }

            callbackFunc(body);

        }
    }

    request.post(options,callback);
}

exports.post = post;