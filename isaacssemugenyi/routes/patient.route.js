const express = require('express');
const router = express.Router();

const Patient = require('../models/patient.model');

//GET: '/' Serving the register/ index page
router.get('/', (req, res)=>{
    res.render('index');
})

//POST: '/' Register client data
router.post('/', async(req, res)=>{
    const patient = new Patient(req.body);
    try{
       await patient.save((err)=>{
            if(err) console.log(err);
            res.redirect('/');
        })
    } catch(err){
        console.log(err);
    }
})

module.exports = router;