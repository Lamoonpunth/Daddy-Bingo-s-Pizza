const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://daddybingo:XsYUroHIMSsZi6xE@dbp.39ern.mongodb.net/test';
const client = new MongoClient(url);

// Database Name
const dbName = 'test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('test1');

  // the following code examples can be pasted here...
  // const insertResult = await collection.insertMany([{ name: 'hee',age:20 }]);
  // console.log('Inserted documents =>', insertResult);

  const findResult = await collection.find({ name : "asdf" },{password : "zxcv"}).toArray();
  console.log('Found documents =>', findResult);


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());