Welcome = (playerName, roomName, admin, capacity, numberOfPlayers) => {
    const left = capacity - numberOfPlayers;
    const myself = admin === playerName;
    const text = `${playerName} has joined ${roomName}. 
    click on the circles above for details about the players.
    ${myself ? 'you' : admin} as an administrator you can add bots to the room.`;
    return {
        from: {id: 'THE DOCTOR', name: 'System'},
        text
    };
}