
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>  {
           
        if(err)
        {
        	return console.log('unable to connect to mongodb server');
        }   

        console.log('connected to mongodb');

        /*db.collection('Todos').find({
            _id: new ObjectId('5bdee68ebb01cb0a3484f3c5')
        }).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));

        },(err) => {
            console.log('unable to fetch Todos'.err);
        });*/

        /*db.collection('Todos').find().count().then((count) => {
            console.log(`odos count: ${count}`);

           // console.log(JSON.stringify(docs,undefined,2));

        },(err) => {
            console.log('unable to fetch Todos'.err);
        });*/

        db.collection('Users').find({name:'haseeb'}).toArray().then((docs) => {
            //console.log(`odos count: ${count}`);

            console.log(JSON.stringify(docs,undefined,2));

        },(err) => {
            console.log('unable to fetch Todos'.err);
        });
       

       // db.close();
       
});