var express = require('express');
const UserData = require('../Schema.js');
var router = express.Router();

router.post('/register', async (req, res, next) => {
  try{
    console.log("Requested");
    const user = new UserData(req.body)
    await user.save()
    console.log(user);
    res.json({
      success:"true"
    })
  }catch(e){return e;}
});

module.exports = router;