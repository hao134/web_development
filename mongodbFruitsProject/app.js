//Require Mongoose
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  //Connects MongoDB Server and Creates FruitsDB
  await mongoose.connect("mongodb://localhost:27017/fruitsDB");
  console.log("Successfully connected to database");

  //Define fruitSchema
  const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please check your data entry, no name specified!"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
    },
    review: String,
  });

  // Use Schema to Create Model
  const Fruit = mongoose.model("Fruit", fruitSchema);

  // Create a document from model specified above
  const fruit = new Fruit({
    //name: "Apple",
    rating: 10,
    review: "Peaches are so yummy",
  });

  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema,
  });

  const Person = mongoose.model("Person", personSchema);

  const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit.",
  });

  //pineapple.save().then(() => console.log("pineapple is created"));

  const mongo = new Fruit({
    name: "Mongo",
    score: 10,
    review: "Great Mongo",
  });

  mongo.save().then(() => console.log("mongo is created"));

  const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple,
  });
  //person.save().then(() => console.log("person amy is created"));

  // //save
  // person.save().then(() => console.log("People collection is created"));
  // // Calls save method in Mongoose to save the fruit document into a Fruits Collection in fruit
  //fruit.save().then(() => console.log("Fruits collection is created"));

  // Create new fruits to Fruits collections
  // const kiwi = new Fruit({
  //   name: "Kiwi",
  //   score: 10,
  //   review: "The best fruit!",
  // });

  // const orange = new Fruit({
  //   name: "Orange",
  //   score: 4,
  //   review: "Too sour for me",
  // });

  // const banana = new Fruit({
  //   name: "Banana",
  //   score: 3,
  //   review: "Weird texture",
  // });

  // Insert to fruits collections
  //   Fruit.insertMany([kiwi, orange, banana], function (err) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("Successfully saved all the fruits to fruitsDB");
  //     }
  //   });
  // }

  Fruit.find(function (err, fruits) {
    if (err) {
      console.log(err);
    } else {
      //mongoose.connection.close();
      // console.log(fruits);
      fruits.forEach(function (fruit) {
        console.log(fruit.name);
      });
    }
  });

  // Fruit.updateOne(
  //   { _id: "62a45427acaf1acb379c2c1c" },
  //   { name: "Peach" },
  //   function (err) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("Successfully updated the document.");
  //     }
  //   }
  // );

  // Fruit.deleteOne({ name: "Peach" }, function (err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully deleted the documents");
  //   }
  // });

  // Person.deleteMany({name: "John"}, funciton(err){
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully deleted all the documents");
  //   }
  // });

  Person.updateOne(
    { _id: "62a33f8f960567b794335980" },
    { favouriteFruit: mongo },
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully updated the document.");
      }
    }
  );
}
