const {MongoClient,ObjectId}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>  {
           
        if(err)
        {
        	return console.log('unable to connect to mongodb server');
        }   

        console.log('connected to mongodb');

       /* db.collection('Todos').findOneAndUpdate({

            _id: new ObjectId('5be0792ffe57a7ade51f772c')
        }, {
            $set : {
                completed:true
            }
        }, {
            returnOriginal: false
        }).then((results) => {

           console.log(results); 

        });*/

        db.collection('Users').findOneAndUpdate({
            _id:new ObjectId('5bdee865ad19a9148484f424')
        },{
            $set : {
                name:'khan haseeb',
                age:'25',
                address:'islamabad'
            }
            
        },{
            returnOriginal:false
        }).then((results) => {
            console.log(results);

        });
       

       // db.close();
       
});