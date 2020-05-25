const connection = require('./connection.js');



var orm = {
    selectAll:function(tableName){
        let qString = 'SELECT* FROM '+tableName
        connection.query(qString,function(err,result){
            if (err) throw err;
            console.log(result);
        })
    },
    
    insertOne:function(tableName,colName1,colName2,burgerName,eaten){
        let qString = 'INSERT INTO '+tableName+'('+colName1+', '+colName2+') VALUES (?,?)';
       
        connection.query(qString,[burgerName,eaten],function(err,result){
            if (err) throw err;
            console.log(result);
        })
    },
    
    updateOne: function(tableName,colName1,colName2,burgerName,eaten){
        console.log(tableName,colName1,colName2,burgerName,eaten);
        let qString = 'UPDATE '+tableName+' SET '+colName1+'='+eaten+' WHERE ??=?';
        connection.query(qString,[colName2,burgerName],function(err,results){
            if(err) throw err
            console.log(results);
        })
        console.log()
    }
}
// orm.insertOne('burgers','burger_name','devoured','MachoAndrew Burger',false);
// orm.updateOne('burgers','devoured','burger_name','KarateKidBurger',false);
orm.selectAll('burgers');
module.exports = orm;