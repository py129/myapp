'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

var request = require('../tool/request.js');
// var initGetData=function(data, apikey){
//     let str = '';
//     if (data){
//         str += '?'+ apikey;
//         for (const key in data) {
//             if (data.hasOwnProperty(key)) {
//                 str += '&'+key+'='+data[key]
//             }
//         }
//     } 
//     return str
// }

router.get('*', function(req,res){
    res.render('index');
});

router.post('/*',function(req,res) {
   req.setTimeout(60000);
   if (req.originalUrl.indexOf('iDataApi') > -1){
        let url = req.originalUrl.replace(/\/iDataApi/,'')
        url = 'http://120.76.205.241:8000' + url
        let obj={
            ...req.body,
            apikey: 'Y7zCVOcg3GSxVYQNjR5Pb4BIOLfJkyBHaRsTP3xmdAPKQbVKNwPSoteFw0hDXpK4'
        }
        request.get(url, obj, function(data){
            res.json(data);
        },req,res)
    } else if (req.originalUrl.indexOf('mTime') > -1){
        let url = req.originalUrl.replace(/\/mTime/,'')
        url = 'https://api-m.mtime.cn' + url
        let obj={
            ...req.body
        }
        request.get(url, obj, function(data){
            res.json(data);
        },req,res)
    } else if (req.originalUrl.indexOf('douban') > -1){
        let url = req.originalUrl.replace(/\/douban/,'')
        url = 'https://api.douban.com' + url
        let obj={
            ...req.body,
            apikey: '0b2bdeda43b5688921839c8ecb20399b',
        }
        request.get(url, obj, function(data){
            res.json(data);
        },req,res)
    } else {
        request.post(req.path,req.body,function(data){
            res.json(data);
        },req,res)
    }
})

module.exports = router;
