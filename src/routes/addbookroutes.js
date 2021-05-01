const express = require("express");
const addbookRouter = express.Router();
function router(nav) {
  
  addbookRouter.get("/", function (req, res) {
    res.render("addbook", {
      nav,
      title: "Library",
    
    });
  });
  //for accessign from url we use colon :
  addbookRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("author", {
      nav,
      title: "Library",
      author: authors[id],
    });
  });
  return addbookRouter;
}

module.exports = router;
