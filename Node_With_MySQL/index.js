var mysql=require('mysql');

var DatabaseConnectionConfig={
    host:'localhost',
    user:'root',
    password:'',
    database:'demo'
}

var con=mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error){
    if (error){
        console.log('Connection Fail')
    }
    else {
        console.log('Connection Success')
    }
});