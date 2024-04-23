var path = require('path'); 
const express = require('express')  
const app = express()  
const port = 4000


 app.use('/node_modules',express.static(__dirname + '/node_modules')); 
 app.use('/app',express.static(__dirname + '/app')); 

app.get('/', function(req, res) {
   // console.log("Server Start");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/main', function(req, res) {
   // console.log("Server Start");
    res.sendFile(path.join(__dirname + '/main.html'));
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

