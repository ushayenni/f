// npm init -y 
//npm install mongodb
const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    // Connect to MongoDB server
    await client.connect();
    console.log("Connected successfully to server");

    // Select database
    const db = client.db("myDatabase");

    // Create collection
    const collection = await db.createCollection("students");
    console.log("Collection created!");

    // Insert one document
    await collection.insertOne({ name: "Prasanth", age: 22 });
    console.log("Document inserted!");

    // Drop collection
    await collection.drop();
    console.log("Collection dropped!");

    // Drop database
    await db.dropDatabase();
     console.log("Database dropped!");

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
