var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if (req.url="/"){

        /*
        //Asynchronus ReadFile Methode
        fs.readFile('Home.html',function (error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data);
            res.end();
        });
        //Synchoronuse ReadFile Methode
        let myData=fs.readFileSync('Home.html');
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();

        fs.writeFile('demo.txt','Hello World',function (error){
            if (error){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write("File Write Fail")
                res.end();
            }
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File write Success");
                res.end();
            }
        })


        let error=fs.writeFileSync('demoSync.txt','Welcome to File Sync');
        if (error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Write Fail");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('File Write Success');
            res.end();
        }
        */
        fs.rename('demo.text','demoNewNew.txt',function (error){
            if (error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File Rename fail');
                res.end();
            }
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File Rename Success');
                res.end();
            }
        })
        //All Methode Code are same here....
        //fileDelete=fs.unlink;
        //when async methode , callback function use
        //when sync methode , callback function unused;
    }
});
server.listen(5050);
console.log("Server Run Success");