// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

let user = { name: 'Ricardo', age: 21, location: 'Mexico' };
let { name, age } = user;
console.log(`name: ${name} age: ${age}`);

// let obj = new  ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /* Insert a Todo */
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  /* Insert new doc into Users (name, age, location) */
  // db.collection('Users').insertOne({
  //   name: 'Ricardo',
  //   age: 21,
  //   location: 'Mexico'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));

  //   console.log(result.ops[0]._id);
  //   console.log(result.ops[0]._id.getTimestamp() );
  // });

  db.close();
});
