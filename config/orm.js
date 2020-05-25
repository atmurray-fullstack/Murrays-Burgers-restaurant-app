const connection = require('./connection.js');



var orm = {
    selectAll:function(){
        let qString = "SELECT burger_name FROM burgers"
        connection.query(qString,function(err,result){
            if (err) throw err;
            console.log(result);
        })
    },
    
    insertOne:function(tableInput,col1,col2,val1, val2){
        let qString = 'INSERT INTO '+tableInput+'(';
        qString+=col1+','+col2+') ';
        qString+='VALUES('+val1+','+val2+')';
        connection.query(qString,function(err,result){
            if (err) throw err;
            console.log(result);
        })
    },
    
    updateOne: function(){
        console.log('updateOne')
    }
}
orm.selectAll();
module.exports = orm;