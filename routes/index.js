'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

var request = require('../tool/request.js');

/* GET home page. */
var clearCookie = function (res, cookie_name) {
  res.clearCookie(cookie_name,{domain:'.testa.huitong.com',path:'/'});
  res.clearCookie(cookie_name,{domain:'.testb.huitong.com',path:'/'});
  res.clearCookie(cookie_name,{domain:'.huitong.com',path:'/'});
  res.clearCookie(cookie_name,{domain:'.zhitiku.cn',path:'/'});
  res.clearCookie(cookie_name,{domain:'.willclass.com',path:'/'});
}

router.get('/*', function(req,res){
    console.log(req.path)
    // if (!req.cookies.EXERCISE_API_USER_COOKIE && req.path != '/login'){
    //     res.redirect('/login');
    // } else if (req.cookies.EXERCISE_API_USER_COOKIE && req.path == '/login'){
    //     res.redirect('/');
    // }
    console.log('--------------------------')
    console.log(req.cookies.EXERCISE_API_USER_COOKIE)
    res.render('index');
});

router.post('/*',function(req,res) {
  req.setTimeout(60000);
  if (req.path === '/api/logout') {
      clearCookie(res, 'EXERCISE_API_USER_COOKIE');
      res.json({});
      return;
  }
  request.post(req.path,req.body,function(data){
      if (req.path === '/exerciseapi/user/login'&&data.status === 0) {
          clearCookie(res, 'EXERCISE_API_USER_COOKIE');
          res.cookie(data.data['COOKIE_NAME'],data.data['COOKIE_VALUE'] ,{
              domain:data.data['COOKIE_DOMAIN'],
              path:'/',
          })
      }
      res.json(data);
  },req,res)
})

module.exports = router;
