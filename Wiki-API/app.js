//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const { rearg } = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

/////////////////////////////////Requests Targetting all Articles //////////////////////////////

app
  .route("/articles")

  .get(function (req, res) {
    Article.find(function (err, foundAriticles) {
      if (!err) {
        res.send(foundAriticles);
      } else {
        res.send(err);
      }
    });
  })

  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      if (!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send(err);
      }
    });
  })
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });

/////////////////////////////////Requests Targetting Specific Articles //////////////////////////////

app
  .route("/articles/:articleTitle")

  .get(function (req, res) {
    const articleTitle = req.params.articleTitle;
    Article.findOne({ title: articleTitle }, function (err, foundResult) {
      if (foundResult) {
        res.send(foundResult);
      } else {
        res.send("No articles matching that title was found");
      }
    });
  })

  .put(function (req, res) {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { upsert: true },
      function (err) {
        if (!err) {
          res.send("Successfully updated the content of the selected article");
        }
      }
    );
  })

  .patch(function (req, res) {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (!err) {
          res.send("Successfully updated article of the selected article.");
        } else {
          res.send(err);
        }
      }
    );
  })

  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (!err) {
        res.send("Successfully deleted article of the selected article");
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
