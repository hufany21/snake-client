const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
    })

    conn.on("data", (message) => {
      console.log(`${message}`) 

     
    })
    conn.on('connect',function(){
      console.log("Successfully connected to game server" )

      conn.write("Name: HYY")
      
      setTimeout(() => {
        conn.write("Move: up");
      }, 500);

    })
    
    
     

  
  
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect