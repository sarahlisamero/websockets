module.exports.go = (server) => {
    const Primus = require("primus");
    const primus = new Primus(server);
  
    //check if connection, then console.log it
    primus.on("connection", (spark) => {
        console.log("connection alive");
  
      //check if data is received, then console.log it
      spark.on("data", (data) => {
        console.log(data);
        primus.write(data); //send data back to client
      });
    });
};

  /*module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server);
    //check if connection is alive, then console.log
    primus.on("connection", (spark) => {
        console.log("connection alive");
        //check if data is received, then console.log
        spark.on("data", (data) => {
            console.log("data:", data);

            //send data back to client
            //spark.write("data received", data); //only this client
            if(data.action === "newMessage"){
                primus.write("data received", data); //all clients
            }
        });
    });
};*/