const express = require("express");
const signupRouter = express.Router();
const Userdata = require("../modal/Userdata");

let mssg = "";

function router(nav2) {
  signupRouter.get("/", function (req, res) {
    res.render("signup", {
      nav2,
      title: "Library",
    });
  });
  //for accessign from url we use colon :
  signupRouter.post("/user", function (req, res) {
    var email = req.body.email;
 

    Userdata.findOne({ email: email }, function (err, user) {
      if (err) {
        console.log(err);
      } else if (!user) {
        var item = {
          email: req.body.email,
          password: req.body.password,
          adress: req.body.adress,
          phone: req.body.phone,
          city: req.body.city,
        };
        var user = Userdata(item);
        user.save(); //saving to db
        mssg = "User registration Successfull. Please login to continue";
        res.redirect("/signup/signupmsg");
      } else {
        mssg = "User alreasy exists";
        res.redirect("/signup/signupmsg");
      }
    });
  });

  signupRouter.get("/signupmsg", function (req, res) {
    res.render("signupmsg", {
      nav2,
      title: "Library",
      mssg,
    });
  });

  return signupRouter;
}

module.exports = router;
