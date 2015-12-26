/**
 *
 * Created by hanqilin on 15/12/26.
 */
var express=require("express");
var router=express.Router();
var crypto=require("crypto");
function  encrypt(str){
    return crypto.createHash("md5").update(str).digest("hex");
}
router.post("/reg",function(req,res){

    var user=req.body;
    var md5Email=encrypt(user.email);
    console.log(md5Email);
    res.json({msg:"success",user:user});
});
module.exports=router;