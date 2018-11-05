
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>  {
           
        if(err)
        {
        	return console.log('unable to connect to mongodb server');
        }   

        console.log('connected to mongodb');

        /*db.collection('Todos').deleteMany({text:'Eat lunch'}).then((results) => {
            console.log(results);
        });

        db.collection('Todos').deleteOne({text:'Eat lunch'}).then((results) => {

            console.log(results);
        });

        db.collection('Todos').findOneAndDelete({completed:false}).then((results) => {
            console.log(results);
        });
       */

      /* db.collection('Users').deleteMany({name:'haseeb'}).then((results) => {
        console.log(results);

       });*/

       db.collection('Users').findOneAndDelete({_id: new ObjectId("5bdf04732ad43c0ed809a380")}).then((results) => {
            console.log(results);
        });



       // db.close();
       
});