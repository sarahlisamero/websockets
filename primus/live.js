module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {/* options */});
    //check if connection is alive, then console.log
    primus.on("connection", (spark) => {
        console.log("connection alive");
        //check if data is received, then console.log
        spark.on("data", (data) => {
            console.log("data:", data);

            //send data back to client
            //spark.write("data received", data); //only this client
            primus.write("data received", data); //all clients
        });
    });
};
