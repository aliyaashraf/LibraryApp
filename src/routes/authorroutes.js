const express = require("express");
const authorsRouter = express.Router();
const Authordata = require("../modal/Authordata");

function router(nav) {
  // var authors = [
  //   {
  //     title: "Dan Brown",
  //     wellknownbooks: "Da Vinci Code, Angels and Demons",
  //     more: "Daniel Gerhard Brown is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons (2000), The Da Vinci Code (2003), The Lost Symbol (2009), Inferno (2013) and Origin (2017). His novels are treasure hunts that usually take place over a period of 24 hours. They feature recurring themes of cryptography, art, and conspiracy theories. The Robert Langdon novels are deeply engaged with Christian themes and historical fact, and have generated controversy as a result. Brown states on his website that his books are not anti-Christian and he is on a 'constant spiritual journey' himself. He claims that his book The Da Vinci Code is simply 'an entertaining story that promotes spiritual discussion and debate'",
  //     img: "db.jpg",
  //   },
  //   {
  //     title: "JK Rowling",
  //     wellknownbooks: "Harry Potter",
  //     more:"Joanne Rowling, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith.",
  //     img: "jkr.jpg",
  //   },
  //   {
  //     title: "Veronica Roth",
  //     wellknownbooks: "Divergent, Insurgent, Allegiant",   
  //     more: "Veronica Roth is best known for her trilogy of novels: Divergent, Insurgent, and Allegiant. She wrote her first book, Divergent, while on winter break in her senior year at Northwestern University, and found an agent by the following March. Her career took off rapidly with the success of her first novel, with the publishing rights sold before she graduated from college in 2010 and the film rights sold mid-March 2011, before the novel was printed in April 2011. Her first two novels sold over five million copies worldwide by fall 2013, just as the film based on the first novel was wrapping up.",
  //     img: "vr.jpg",
  //   },
  // ];
  authorsRouter.get("/", function (req, res) {
    Authordata.find().then(function (authors) {
      res.render("authors", {
        nav,
        title: "Library",
        authors,
      });
    });
  });
   
  //for accessign from url we use colon :
  authorsRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
      res.render("author", {
        nav,
        title: "Library",
        author,
      });
    });
   
  });
  authorsRouter.get('/edit/:id',(req, res)=> {
    const id = req.params.id;
    Authordata.findOne({ _id: id })
        .then(function(author) {
            res.render('authoredit', {
                nav,
                title: 'Library',
                author
            });
        });
  });
   
  authorsRouter.post('/edit/update/:id',(req,res)=>{
    const id = req.params.id;
    var item={
      aname: req.body.aname,
      books: req.body.books,
      desc: req.body.desc,
      image: req.body.image 
      
    }
    
    Authordata.findByIdAndUpdate({_id:id},item,function(req,res){
  
    });
    res.redirect('/authors')
  });

  authorsRouter.get('/delete/:id',(req, res)=> {
    const id = req.params.id;
    Authordata.deleteOne({ _id: id })
        .then(function(author) {
           
            res.redirect('/authors');
        });
  });
  return authorsRouter;
}

module.exports = router;
