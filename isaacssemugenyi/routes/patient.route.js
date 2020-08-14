const express = require('express');
const router = express.Router();

const Patient = require('../models/patient.model');

/**
 * GET: '/' index page
 * POST: '/' index page
*/

router.get('/', (req, res)=>{
    res.render('index');
})

router.post('/', (req, res)=>{
    const patient = new Patient(req.body);
    
    patient.save((err)=>{
        if(err) console.log(err);
        console.log(req.body);
        res.redirect('/');
    })
})

module.exports = router;