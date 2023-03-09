var express = require('express');
var UserDetails = require('../Schema.js');
var router = express.Router();

router.post('/login', async function (req, res){
  try {
    var loginCd = await UserDetails.findOne({ Email: req.body.Email })
    console.log(loginCd);
    if (loginCd && loginCd.Email == req.body.Email ) {
        res.json({
          data:loginCd,
          status:true
        })
      } else{
        res.json({
          data:{
            status:0
          }
        })
      }
  } catch (err) { console.log(err); }
});

module.exports = router;