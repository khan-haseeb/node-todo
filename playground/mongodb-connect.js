//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');
/*var obj=new ObjectId();
console.log(obj);*/
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>  {
           
        if(err)
        {
        	return console.log('unable to connect to mongodb server');
        }   

        console.log('connected to mongodb');
       // const db=client.db('TodoApp');

       /* db.collection('Todos').insertOne({

        	text:'todo something',
        	completed:false

        }, (err,result) => {

        	if(err)
        	{
        		return console.log('unabke to insert Todos',err);
        	}

        	console.log(JSON.stringify(result.ops,undefined,2));
        });*/
/*
        db.collection('Users').insertOne({

        	name: 'haseeb',
        	age: '23',
        	address: 'lahore'

        }, (err,result) => {

        	if(err)
        	{
        		return console.log('unable to insert into Users',err);
        	}
        	console.log(JSON.stringify(result.ops,undefined,2));

        });*/

        db.close();
       
});