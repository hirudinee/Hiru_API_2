module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["Hiru"] = {
        host: process.env.EndPoint_Hiru,
        port: 3306,
        user: "test",
        password: "12ww3456781",
        database: "hiru",
    };
    
    };
