const express = require("express");
const addauthorRouter = express.Router();
function router(nav) {

  addauthorRouter.get("/", function (req, res) {
    res.render("addauthor", {
      nav,
      title: "Library",
    });
  });
  //for accessign from url we use colon :
  addauthorRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("author", {
      nav,
      title: "Library",
      author: authors[id],
    });
  });
  return addauthorRouter;
}

module.exports = router;
