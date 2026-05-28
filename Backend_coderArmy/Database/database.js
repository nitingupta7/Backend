const url="mongodb+srv://coderarmy:Ram@codingn.4kbyfef.mongodb.net/";

//is. string ke help se aap us cluster se connect kar sakta hainconst { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'


const { MongoClient } = require('mongodb');  
// Connection URL
const url = 'mongodb+srv://coderarmy:Ram@codingn.4kbyfef.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect(); 
  //means cluster ke sath connect ho raha hai
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());