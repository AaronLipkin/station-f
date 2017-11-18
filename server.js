const express        = require('express');
const app            = express();
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');


app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));


const roomsController = require('./controllers/roomsController.js');
app.use('/rooms', roomsController);


app.get('/', (req, res)=>{
	res.render('index.html')
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
