const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const nav1 =  [
  {link: '/login', name:'Log In'},
  {link: '/signup', name: 'Sign Up'}
]
const nav2 =  [
  {link: '/login', name:'Log In'}
]
const nav3 =  [
  {link: '/signup', name:'Sign Up'}
]
const nav4 =  [
  {link: '/books', name:'Books'},
  {link: '/authors', name:'Authors'},
  {link: '/addbook', name:'Add New Book'},
  {link: '/addauthor', name: 'Add New Author'},
  {link: '/index', name:'Log Out'}
]

const booksRouter = require("./src/routes/bookroutes")(nav4);
const authorsRouter = require("./src/routes/authorroutes")(nav4);
const addbookRouter = require("./src/routes/addbookroutes")(nav4);
const addauthorRouter = require("./src/routes/addauthorroutes")(nav4);
const signupRouter = require("./src/routes/signuproutes")(nav2);
const loginRouter = require("./src/routes/loginroutes")(nav3);

app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/addbook", addbookRouter);
app.use("/addauthor", addauthorRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.get("/", function (req, res) {
  res.render("index", {
    nav1,
    title: "Library",
  });
});
app.get('/welcome', function(req, res){
  res.render('welcome',
  {
      nav4,
      title: 'Library'
  });
});
app.listen(port,()=>{console.log("Server Ready at" + port)});
