# Section 7
---
## Building a NoSQL Vocabulary

|      SQL   |  mongoDB   
|     ------:|:------    
|  database  |  database    
|     table  |  collection    
|row/record  |  document    
|   columns  |  fields  


Path for mongo: `~/mongo/bin`

`mongod`        is going to start up the mongodb server 

`mongo`         is going to let us connect it to the server, just as 'node' that let us run some javascript commands
                  mongo let us run some mongo commands


type: `./` is used to exececute
```
./mongod --dbpath ~/mongo-data
./mongod --dbpath {mongo-data-path-dir/}
```

[Github: node-mongodb-native](https://github.com/mongodb/node-mongodb-native)

## The ObjectID
 
```javascript
let obj = new  ObjectID();
console.log(obj);
console.log(obj.getTimestamp());
```


## Fetching Data


## Setting up the Repo