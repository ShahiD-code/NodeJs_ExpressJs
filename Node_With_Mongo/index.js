var MongoClient=require('mongodb').MongoClient;

var URL="mongodb://127.0.0.1:27017/";

var config={useUnifiedTopology: true};

MongoClient.connect(URL,config,function (error,MyMongoClient){
    if (error){
        console.log("Connection Fail")
    }
    else {
        console.log("Connection Success")
        InsertData(MyMongoClient);
        //DeleteOne(MyMongoClient)
        //DeleteAll(MyMongoClient)
    }
})

function InsertData(MyMongoClient) {
    var MyDatabase=MyMongoClient.db('school');
    var MyCollection=MyDatabase.collection('student_list');
    var MyData={name:"Shahid",roll:"9",city:"Rangpur"};
    MyCollection.insertOne(MyData,function (error) {
        if (error){
            console.log('Data Insert Fail')
        }
        else {
            console.log('Data Insert Success');
        }

    })
}

function DeleteOne(MyMongoClient) {
    var MyDatabase=MyMongoClient.db('school');
    var MyCollection=MyDatabase.collection('student_list');

    var DeleteItem={roll: "8"}
    MyCollection.deleteOne(DeleteItem,function (error) {
        if (error){
            console.log('Data Delete Fail')
        }
        else {
            console.log('Data Delete Success')
        }
    });

}

function DeleteAll(MyMongoClient) {
    var MyDatabase=MyMongoClient.db('school');
    var MyCollection=MyDatabase.collection('student_list');

    MyCollection.deleteMany(function (error,resultObj) {
        if (error){
            console.log('Data Delete Fail')
        }
        else {
            console.log(resultObj.result.n +"Item Deleted")
        }
    });
}