const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var users=0

//tarvitaan, että ulkoinen css-tiedosto saadaan käyttöön
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});





  io.on('connection', (socket) => {
    socket.on('chat message', (msg,user,time,users) => {
      if (msg==='private')
      {
        socket.broadcast.emit('chat message',msg,user,time,users);
        

      }
      else{
         //Tässä tapauksessa lähetämme viestin yksinkertaisuuden vuoksi kaikille, myös lähettäjälle.
      io.emit('chat message', msg,user,time,users);


      }
       
      //tämä lähettää viestin siten, että se näkyy vain vastaanottajan ikkunassa
      //socket.broadcast.emit('chat message',msg,user,time,users);
    });
  });
  

  //kun localhost:3000 avataan suoritetaan connect + lisätään aktiivinen käyttäjä
io.on('connection', (socket) => {
  users++
  io.emit('count',users)
    
    console.log('a user connected', users,socket.id);

    //jos localhost:3000 suljetaan, niin suoritetaan disconnect + vähennetään aktiivinen
    socket.on('disconnect', () => {
      users--
      io.emit("count",users)
      console.log('user disconnected',users);
    });
  });

  

server.listen(3000, () => {
  console.log('listening on *:3000');
});