//Requiring dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Declaring the port
const port = process.env.PORT || 3000;

//Setting up the view engine
app.set('view engine', 'pug');
app.set('views', './views');

//Serving static files
app.use(express.static('public'));
//Setting up bodyparser
app.use(express.urlencoded({extended: true}))

//Requiring routes
const patientRoute = require('./routes/patient.route')

//Connecting the db
mongoose.connect('mongodb://localhost:27017/assessment', {useNewUrlParser: true, useUnifiedTopology: true})

//Configuring routes
app.use('/', patientRoute)

//Handle un defined routes
app.use('*', (req, res)=>{
    res.render('error');
})

app.listen(port, ()=>{
    console.log('Server started on port ' +port)
})