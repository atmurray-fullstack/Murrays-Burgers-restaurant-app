const orm = require('../config/orm.js');

var burger = {
    allBurgers: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });

    },
    createBurger: function (burgerName, cb) {
        orm.insertOne('burgers', 'burger_name', 'devoured', burgerName, false, function (res) {
            
            cb(res);
        })
    },
    updateBurger: function (burgerName, cb) {
        orm.updateOne('burgers', 'devoured', 'burger_name', burgerName, true, function (res) {
            cb(res)
        })
    }

}

// burger.allBurgers(function(res){
//     console.log(res);
// })
// burger.updateBurger('MachoAndrew Burger', function (result) {
//     console.log(result)
// })
// burger.createBurger("The New NewBurger",(res)=>{
//     console.log(res);
// })

module.exports = burger;