const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kwak0329:!wlsgml3443@cluster0.jed01au.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log("Start ...");
client.connect(err => {
  console.log("prepare Connection");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});