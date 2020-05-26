const express = require('express');
const burger = require('../models.js/burger.js');

var router = express.Router();

router.get('/', function(req,res){
    burger.allBurgers(function(data){
        const hdlbrsObj = {
            burgers:data
        };
        console.log(hdlbrsObj);
        res.render('index',hdlbrsObj);
    });
});

router.post('')





module.exports = router;