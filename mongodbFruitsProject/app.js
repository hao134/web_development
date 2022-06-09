const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const dbName = "fruitsDB";

async function run() {
  try {
    await client.connect(function () {
      console.log("Connected successfully to server!");
    });
    const database = client.db(dbName);

    const collection = database.collection("fruits");

    const docs = [
      {
        name: "Apple",
        score: 8,
        review: "Great fruit",
      },
      {
        name: "Orange",
        score: 6,
        review: "Kinda sour",
      },
      {
        name: "Bananna",
        score: 9,
        review: "Great stuff!",
      },
    ];

    const options = { ordered: true };

    const result = await collection.insertMany(docs, options);

    console.log(`${result.insertedCount} documents were inserted.`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("fruits");
  // Find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
