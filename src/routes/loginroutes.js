const express = require('express');
const loginRouter = express.Router();
const Userdata = require("../modal/Userdata");
let mssg = "";

function router(nav3){
    loginRouter.get('/', function(req, res){
        res.render('login', 
        {
            nav3,
            title: 'Library'
        });
    });

   
    loginRouter.post("/add",function(req,res){
        var mail = req.body.mail;
        var pwd = req.body.password;

        Userdata.findOne({ email : mail,password:pwd},function(err,user){
            if(err)
            {
                console.log("err") ;
                
            }
            else if (!user)
            {
                    mssg = "Wrong credentials!! create an account if you are new"
                    res.redirect("/login/loginmsg");  
            }
            else
            {
                res.redirect("/welcome");  
            }
            
        })
    });

    loginRouter.get("/loginmsg",function(req,res){
        res.render("loginmsg",{
            nav3,
            title:'Library',
            mssg
        });
    });
    

    return loginRouter;
}

module.exports = router;