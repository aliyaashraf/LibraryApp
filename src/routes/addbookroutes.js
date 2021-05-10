const express = require("express");
const addbookRouter = express.Router();
const Bookdata = require('../modal/Bookdata');
function router(nav) {
  
  addbookRouter.get("/", function (req, res) {
    res.render("addbook", {
      nav,
      title: "Library",
    
    });
  });
  //for accessign from url we use colon :
  addbookRouter.post("/add", function (req, res) {
    var item = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      image: req.body.image,
      description: req.body.description
    }
    var book = Bookdata(item);
    book.save();//saving to db
    res.redirect('/books');

  });
  return addbookRouter;
}

module.exports = router;
