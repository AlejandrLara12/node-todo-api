// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// let user = { name: 'Ricardo', age: 21, location: 'Mexico' };
// let { name, age } = user;
// console.log(`name: ${name} age: ${age}`);

// let obj = new  ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'})
  // .then( (result) => {
  //   console.log(result);
  // });
  /*
    returns
    CommandResult {
      result: { n: 3, ok: 1 },
      connection:
    where results.ok is the success state and results.n is the nombers of records that were deleted
  */


  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  // .then( (result) => {
  //   console.log(result);
  // });
  /*
    returns
    CommandResult {
      result: { n: 3, ok: 1 },
      connection:
    where results.ok is the success state and results.n is the first record that filled the criteria
  */


  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'})
  // .then( (result) => {
  //   console.log(result);
  // });
  /*
    returns
    { lastErrorObject: { n: 1 },
      value:
      { _id: 5a5a96bb8dadf2092abd9c9c,
        text: 'Eat lunch',
        completed: false },
      ok: 1 }
    where ok is the success state but we get the value of that record/doc 
  */


  // Challenge
  /* Delete all users with name 'Ricardo' */
  // db.collection('Users').deleteMany({name: 'Ricardo'})
  // .then( (result) => {
  //   console.log(result);
  // } );
  
  /* Delete one user with _id ref */
  db.collection('Users').findOneAndDelete({ 
    _id : new ObjectID("5a5a9a188dadf2092abd9d95")
  })
  .then( (result) => {
    console.log(JSON.stringify(result,undefined,2));
  } );

  // db.close();
});
