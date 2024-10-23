require("dotenv").config();

// express js inilatizing the app

const express = require("express");
const app = express();
const port = 3000;

const Article = require("./models/Article");

// connecting to the database
const mongoose = require("mongoose");
const db = mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`,
  )
  .then(() => {
    console.log("\x1b[32mConnected to the database 💪\x1b[0m");
  })
  .catch((err) => {
    console.error("\x1b[31mError connecting to the database:\x1b[0m", err);
  });

// using the json middleware
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// defining the endpoints
app.get("/", (req, res) => {
  res.send("Hello World! This is the server home page");
});

app.get("/findsum/:num1/:num2", (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let sum = Number(num1) + Number(num2);
  console.log(req.params);
  res.send(
    "<h1>This is the findsum page</h1> <h2>The sum of the two numbers is: " +
      sum +
      "</h2>",
  );
});

app.get("/sum", (req, res) => {
  let num1 = req.query.num1;
  let num2 = req.query.num2;
  let sum = Number(num1) + Number(num2);
  console.log(req.query);
  res.send(
    "<h1>This is the findsum page</h1> <h2>The sum of the two numbers is: " +
      sum +
      "</h2>",
  );
});

app.get("/sayHi", (req, res) => {
  const body = req.body;
  console.log(req.body);

  if (!body.name) {
    res.send(`<h1>Hello! NO NAME FOUND</h1>`);
    return;
  }

  res.send(`<h1>Hello! ${body.name}</h1>`);
});

app.get("/q", (req, res) => {
  res.json({
    name: req.query.name,
    age: req.query.age,
    language: req.query.language,
  });
});

app.get("/numbers", (req, res) => {
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  res.render("numbers.ejs", {
    numbers: num1 + num2,
  });
});

app.get("/home", (req, res) => {
  res.send("weldome home man!");
});

/// ===== Articles Endpoint =====
app.post("/articles", async (req, res) => {
  const newArticle = new Article();
  newArticle.title = req.body.title;
  newArticle.body = req.body.body;
  newArticle.numbersOfLikes = req.body.numbersOfLikes;
  await newArticle.save();
  // res.send(
  //   `New Article created successfully! with the title: ${newArticle.title}`,
  // );
  res.json(newArticle);
});

app.get("/articles", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.render("articles.ejs", {
    articles: articles,
  });
});

app.get("/articles/:articleId", async (req, res) => {
  const articles = await Article.findById(req.params.articleId);
  res.send(articles);
});

app.get("/articles/d/:articleId", async (req, res) => {
  try {
    const articles = await Article.findByIdAndDelete(req.params.articleId);
    res.send("<h1>Article deleted successfully!</h1>");
    return;
  } catch (error) {
    console.log(error);
    return res.send("<h1>Article not found!</h1>");
  }
});
