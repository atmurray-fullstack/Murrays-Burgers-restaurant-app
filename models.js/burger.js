const orm = require('../config/orm.js');

var burger = {
    all: function(cBack){
        orm.selectAll("burgers",function(res){
            cBack(res);
        })
    }
}