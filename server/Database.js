let users = [];

let rooms = [];

const insertUser = (user) => {

    users.push({

        id: user.id,
        name: user.name || "",
        room: user.room,
        connectedSince: user.connectedSince || 0,
        isBot: user.isBot || false

    });

}

const removeUser = (idUser) => {

    users = users.filter(a => a.id !== idUser);

}

const insertRoom = (room, admin) => {

    rooms.push({

        name: room.name,
        status: "WAITING",
        capacity: room.capacity,
        numberOfPlayers: 0,
        admin

    });

}

const removeRoom = (nameRoom) => {

    rooms = rooms.filter(a => a.name !== nameRoom);

}

const findUser = (cond) => {

    return users.find(cond);

}

const findRoom = (cond) => {

    return rooms.find(cond);

}

const filterUser = (cond) => {

    return users.find(cond);

}

const getRooms = () => rooms;

module.exports = {

    insertRoom,
    removeRoom,
    removeUser,
    insertUser,
    findUser,
    findRoom,
    filterUser,
    getRooms,
    users,
    rooms

}