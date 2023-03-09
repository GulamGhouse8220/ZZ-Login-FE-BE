var express = require("express")
var userData = require('../Schema.js')

var router = express.Router()

router.get('/getuser/:userId', async(req,res)=>{
    try{
        var user = await userData.findById(req.params.userId)
        res.json({
           data:user
        })
    }catch (e) {
        console.log(e)
    }
})

module.exports = router;