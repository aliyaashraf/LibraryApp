const express = require("express");
const booksRouter = express.Router();
function router(nav) {
  var books = [
    {
      title: "Da Vinci Code",
      author: "Dan Brown",
      genre: "Thriller",
      more: "A murder in Paris' Louvre Museum and cryptic clues in some of Leonardo da Vinci's most famous paintings lead to the discovery of a religious mystery. For 2,000 years a secret society closely guards information that -- should it come to light -- could rock the very foundations of Christianity.",
      img: "dv.jpg",
    },
    {
      title: "Harry Potter",
      author: "JK Rowling",
      genre: "Fantasy",
      more: "The story is about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths",
      img: "hp.jpg",
    },
    {
      title: "Divergent",
      author: "Veronica Roth",
      genre: "Fiction",
      more: "Tris Prior lives in a futuristic world in which society is divided into five factions. As each person enters adulthood, he or she must choose a faction and commit to it for life. Tris chooses Dauntless -- those who pursue bravery above all else. However, her initiation leads to the discovery that she is a Divergent and will never be able to fit into just one faction. Warned that she must conceal her status, Tris uncovers a looming war which threatens everyone she loves.",
      img: "di.jpg",
    },
  ];
  booksRouter.get("/", function (req, res) {
    res.render("books", {
      nav,
      title: "Library",
      books,
    });
  });
  //for accessign from url we use colon :
  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Library",
      book: books[id],
    });
  });
  return booksRouter;
}

module.exports = router;
