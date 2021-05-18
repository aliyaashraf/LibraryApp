const express = require("express");
const addauthorRouter = express.Router();
const Authordata = require("../modal/Authordata");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/images");
  },
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

function router(nav) {
  addauthorRouter.get("/", function (req, res) {
    res.render("addauthor", {
      nav,
      title: "Library",
    });
  });
  //for accessign from url we use colon :
  addauthorRouter.post("/add", upload.single("image"), function (req, res) {
    var item = {
      aname: req.body.aname,
      books: req.body.books,
      desc: req.body.desc,
      image: req.file.filename,
    };
    var author = Authordata(item);
    author.save(); //saving to db
    res.redirect("/authors");
  });
  return addauthorRouter;
}

module.exports = router;
