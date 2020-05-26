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
    burger.createBurger(req.body.newBurger, function () {
        burger.allBurgers(function (data) {
            const hdlbrsObj = {
                burgers: data
            };
            res.render('index', hdlbrsObj);
        });
    })
})

router.put("/api/burgers/:name", function (req, res) {
    console.log('updateburgers: ' + req.params.name + '-'.repeat(75));

    burger.updateBurger(req.params.name, function () {

        burger.allBurgers(function (data) {
            const hdlbrsObj = {
                burgers: data
            };
            res.render('index', hdlbrsObj);
        })

    })
})




module.exports = router;