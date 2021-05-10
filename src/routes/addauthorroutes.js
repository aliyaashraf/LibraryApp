const express = require("express");
const addauthorRouter = express.Router();
const Bookdata = require('../modal/Bookdata');
function router(nav) {

  addauthorRouter.get("/", function (req, res) {
    res.render("addauthor", {
      nav,
      title: "Library",
    });
  });
  //for accessign from url we use colon :
  addauthorRouter.post("/add", function (req, res) {
    var item = {
      name: req.body.name,
      books: req.body.books,
      description: req.body.description,
      image: req.body.image
      
    }
    var author = Bookdata(item);
    author.save();//saving to db
    res.redirect('/authors');

  });
  return addauthorRouter;
}

module.exports = router;
