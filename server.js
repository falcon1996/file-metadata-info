var express = require('express');
var multer  = require('multer');
var bodyParser = require('body-parser')
var cors = require('cors')

var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.render('index.html');		
});


app.post('/uploadImages', upload.single('myfile'), function(req,res,next){
    
    return res.json(req.file.size);
    
})


app.listen(8080,function(){
    console.log("Example of app listning on port 8080");
});
