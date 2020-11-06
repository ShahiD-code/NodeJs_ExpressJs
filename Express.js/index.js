var express=require('express');

app=express();


//Simple String Response:
//res.send()--> response Body.
//res.end()-->response ending point.


app.get('/one',function (req,res) {
    res.end('This is simple string response')

});
app.post('/two',function (req,res) {
    res.end('This is simple string response')

});

//Response Status Code:

app.get('/three',function (req,res) {
    res.status(401).end('Unauthorized')
})


//JSON Response:

app.get('/four',function (req,res) {
    let MyJsonArray=[
        {
            name:'Shahid',
            city:'Rangpur',
            occupation:'dev'
        },{
            name:'Rana',
            city:'Rangpur',
            occupation:'dev'
        },
        {
            name:'Sultan',
            city:'Rangpur',
            occupation:'Student'
        },
        {
            name:'Karim',
            city:'Lalmonirhat',
            occupation:'Student'
        }
    ]
    res.json(MyJsonArray);
})

//Download Response Code:

app.get('/five',function (req,res) {
    res.download('./Upload/FbProfile.jpg')
})

//Response Redirect:
app.get('/Bangladesh',function (req,res) {
    res.redirect('http://localhost:8000/India');
})
app.get('/India',function (req,res) {
    res.send('This is India')
})

//Response Header:
app.get('/six',function (req,res) {
    res.append('name','Shahid');
    res.append('city','Rangpur');
    res.append('age','27');

    res.status(201).end('Hello World');

})

//Response Cookie:
app.get('/seven',function (req,res) {
    res.cookie('name','Shahid');
    res.cookie('city','Rangpur');
    res.cookie('age','27');
    res.end('Cookie Send Success')
});

//Response clearCookie:
app.get('/eight',function (req,res) {
    res.clearCookie('name');
    res.clearCookie('city');
    res.cookie('age','27');
    res.end('Cookie Clear Success')
});

app.listen(8000,function () {
    console.log('Server Run Success')
});