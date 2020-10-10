const express = require('express');
const session = require('express-session');
const bodyParser = require("body-parser");
const hallEvents = require('./SocketHallEvents');
const homeEvents = require('./SocketHomeEvents');
const gameEvents = require('./SocketGameEvents');
const app = express();
const http = require("http").Server(app);
const io = require('socket.io')(http).of('/app')

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'keyboard cat',
    cookie: {maxAge: 3600000},
    resave: false,
    saveUninitialized:false
}));

app.use(express.static(__dirname + "/public"));

app.use("*", express.static(__dirname + "/public/index.html"));

io.on('connection', function(socket) {
    console.log(`\n${socket.id} has joined\n`);

    hallEvents.joinRoomCheck(socket);
    hallEvents.newMessage(socket);
    hallEvents.exit(socket);
    hallEvents.addBot(socket);
    hallEvents.removeBot(socket);

    homeEvents.disconnect(socket);
    homeEvents.joinHome(socket);
    homeEvents.loadAllRooms(socket);
    homeEvents.createRoom(socket);
    homeEvents.joinRoom(socket);

    gameEvents.startGameCheck(socket);
    gameEvents.requestCards(socket);
    gameEvents.sendCard(socket);
    gameEvents.buyCard(socket);
    gameEvents.timeOut(socket);
    gameEvents.newMessage(socket);
});

http.listen(app.get('port'), function() {
    console.log("App is listening on port " + app.get('port'));
});