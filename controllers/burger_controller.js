const express = require('express');
const burger = require('../models.js/burger.js');

var router = express.Router();

router.get('/', function (req, res) {
    console.log('getburgers' + '-'.repeat(50))
    burger.allBurgers(function (data) {
        const hdlbrsObj = {
            burgers: data
        };
        console.log(hdlbrsObj)
        res.render('index', hdlbrsObj);
    });
});

router.post('/', function (req, res) {
    console.log('makeburgers' + '-'.repeat(75))
    console.log(req.body.newBurger);
    burger.createBurger(req.body.burger_name, function () {
        burger.allBurgers(function (data) {
            const hdlbrsObj = {
                burgers: data
            };
            res.render('index', hdlbrsObj);
        });
    })
})

router.put("/", function (req, res) {
    console.log('updateburgers: '+'-'.repeat(75));
    
    burger.updateBurger(req.body.burger_name, function () {

        burger.allBurgers(function (data) {
            const hdlbrsObj = {
                burgers: data
            };
            res.render('index', hdlbrsObj);
        })

    })
})




module.exports = router;