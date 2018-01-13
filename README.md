# Section 7
---
## Building a NoSQL Vocabulary

      SQL   |  mongoDB
      ------+------
  database  |  database
     table  |  collection
row/record  |  document
   columns  |  fields


~/mongo/bin
  > mongod        is going to start up the db server 
  > mongo         is going to let us connect it to the server, just as 'node' that let us run some javascript commands
                  mongo let us run some mongo commands

type: ./mongod --dbpath ~/mongo-data
./ is used to exec


https://github.com/mongodb/node-mongodb-native


## The ObjectID
 
// let obj = new  ObjectID();
// console.log(obj);
// console.log(obj.getTimestamp());


## Fetching Data


## Setting up the Repo