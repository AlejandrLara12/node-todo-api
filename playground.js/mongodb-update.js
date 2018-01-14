const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate(filter, update, options, callback)
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a5a98498dadf2092abd9cf0')
  //  }, {
  //    $set: {
  //      completed: true
  //    }
  //  }, {
  //    returnOriginal: false
  //  })
  //  .then( (result) => {
  //    console.log(result);
  //  } );
   /*
    returns
    { lastErrorObject: { n: 1, updatedExisting: true },
      value:
      { _id: 5a5a98498dadf2092abd9cf0,
        text: 'Eat lunch',
        completed: true },
      ok: 1 }
   */

   // Challenge
   db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a5aa2fe8dadf2092abd9ece')
   }, {
     $set: {
       name: 'Quique'
     },
     $inc: {
       age: 1
     }
   }, {
     returnOriginal: false
   })
   .then( (result) => {
     console.log(result);
   } );

  db.close();
});
