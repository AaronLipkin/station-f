const express        = require('express');
const app            = express();
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');


app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));


const roomsController = require('./controllers/roomsController.js');
app.use('/roomsapi', roomsController);


app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(__dirname + '/public/index.html');
});


var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/stationf';

mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});

port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('listening....');
});
