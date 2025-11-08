/ npm init -y 
//npm install mongoose mongodb
const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // Select database and collection
    const db = client.db("myDatabase");
    const collection = db.collection("students");

    // Insert sample records (if not already there)
    await collection.insertMany([
      { name: "Prasanth", age: 22, grade: "A" },
      { name: "Kumar", age: 24, grade: "B" },
      { name: "Ravi", age: 21, grade: "A" },
      { name: "Anita", age: 23, grade: "C" },
      { name: "Divya", age: 22, grade: "B" }
    ]);
    console.log("Sample records inserted!");

    // 1. Find documents
    const allStudents = await collection.find().toArray();
    console.log("All Students:", allStudents);

    // 2. Limit results (first 3)
    const limitedStudents = await collection.find().limit(3).toArray();
    console.log("First 3 Students:", limitedStudents);

    // 3. Sort results (by age ascending)
    const sortedStudents = await collection.find().sort({ age: 1 }).toArray();
    console.log("Students sorted by age (asc):", sortedStudents);

    // 4. Create an index on "name"
    await collection.createIndex({ name: 1 });
    console.log("Index created on 'name' field");

    // 5. Aggregate (group by grade and count students)
    const gradeSummary = await collection.aggregate([
      { $group: { _id: "$grade", count: { $sum: 1 } } }
    ]).toArray();
    console.log("Grade Summary:", gradeSummary);

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run();
