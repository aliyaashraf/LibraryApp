const express = require("express");
const addbookRouter = express.Router();
const Bookdata = require("../modal/Bookdata");

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
  addbookRouter.get("/", function (req, res) {
    res.render("addbook", {
      nav,
      title: "Library",
    });
  });
  //for accessign from url we use colon :
  addbookRouter.post("/add", upload.single("image"), function (req, res) {
    var item = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      description: req.body.description,
      image: req.file.filename,
    };
    var book = Bookdata(item);
    book.save(); //saving to db
    res.redirect("/books");
  });
  return addbookRouter;
}

module.exports = router;
