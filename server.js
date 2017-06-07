var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: '../public/uploads/' });

var app = express();

var obj = {}

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('upload.html');		
});

//var uploadedFiles = upload.fields([{name : 'myfile', maxCount : 1}])

var uploadedFiles = upload.single('myfile')

app.post('/bars/index', uploadedFiles, function(req,res,next){
    
    upload(req,res,function(err){
        
        console.log('Error while uploading!')
    })
    
    obj = {size : 1};
    console.log(req.files);
    
})



app.get('/get-file-size', function(req,res){
    
    res.send(JSON.stringify(obj));
})



app.listen(8080,function(){
    console.log("Example of app listning on port 8080");
});
