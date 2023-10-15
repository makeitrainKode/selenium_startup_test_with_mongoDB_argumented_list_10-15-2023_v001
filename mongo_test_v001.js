//#############################################################################
//#                  MongoDB variables                                       ##
//#############################################################################


var fbMongoDBQuery = new Boolean(false);
var fbMongoDBDeleteRec = new Boolean(false);
var fbMongoDBInsert= new Boolean(false);
var fbMongoDBUpdateRec = new Boolean(false);

var MongoDBC = require('mongodb').MongoClient;
var mongoURI = 'mongodb://localhost/facebookCookieDB';
var fbCookieQueriedRecord = "";
var fbCookies = "";
var fbCookieRecToDelete = "";



function mongoDBGarbageCollection()
{



try
{

MongoDBC = null;
mongoURI = null;
fbCookieQueriedRecord = null;
fbCookies = null;
fbCookieRecToDelete = null;



}

catch 
{

console.log(console.error());

}




}




var mongoDBConnection = MongoDBC.connect(mongoURI, function(err,db) {

try
 {            



if(fbMongoDBQuery)
{

var cursor = db.collection('FBCookieDB').find();
   cursor.each(function(err, doc) 
   {

     console.log(doc);

   });


   mongoDBGarbageCollection();

 }

 else
 {

   console.log(console.error());
 }



  }

catch
{

console.log(console.error());
}


});




var mongoDBNewRecord = MongoDBC.connect(mongoURI, function(err,db) {

try
 { 


 if(fbMongoDBInsert)
 {



MongoDBC.db.connect(function (db,error) {

    db.collection('FBCookieDB').insertOne({ 


    	FBCookieDBRec: fbCookies.toString()




});

});

mongoDBGarbageCollection();


 }


 else
 {


  console.log(console.error());

 }



  }

catch
{

console.log(console.error());
}


});





var mongoDBUpdateRec = MongoDBC.connect(mongoURI, function(err,db) {


try
 {


 	if(mongoDBUpdateRec)
 	{ 


 		db.collection('FBCookieDB').updateOne({

         "FBCookieDBRec":fbCookieQueriedRecord

     }, {


     $set: {
           
            "FBCookieDBRec" : fbCookies
           
    
  
           }

       });
       

       mongoDBGarbageCollection()


 	
 		
 	}


 else
 {

    console.log(console.error());

 }




 


 	





} 

catch 
{ 




console.log(console.error());


}



});



var mongoDBDeleteRec = MongoDBC.connect(URI, function(db,err)
{


try
{

	if(fbMongoDBDeleteRec)
	{


	db.collection('FBCookieDB').deleteOne(


	{

		'FBCookieDBRec' : fbCookieRecToDelete

	}
 

  );

   mongoDBGarbageCollection();


  

	}
   
   else
   {
     console.log(console.error());
   }





}

catch
{

 console.log(console.error());

}




});