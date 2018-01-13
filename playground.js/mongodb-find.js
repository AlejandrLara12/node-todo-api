const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  // Connection Success
  console.log('Connected to MongoDB server');
  // console.log('db', db);

  // .find({ query })
  // db.collection('Todos').find({completed: false}).toArray()
  // db.collection('Todos').find({ 
  //   _id: new ObjectID('5a4432a982af46048964cff7'),
  //   completed: Boolean
  // }).toArray()
  //   .then( (docs) => {
  //     console.log('Todos: ');
  //     console.log(JSON.stringify(docs, undefined,2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos');
  //   });

  db.collection('Todos').find().count()
    .then( (count) => {
      console.log(`Todos count: ${count}`);
    }, (err) => {
      console.log('Unable to fetch todos');
    });

  
  db.collection('Users').find({
      name: 'Ricardo'
    }).toArray()
  .then( (docs) => {
      console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
      console.log('Unable to fetch users');
    } );


  db.close();
});
