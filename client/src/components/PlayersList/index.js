import React from 'react';
import PropTypes from 'prop-types';

const PlayersList = ({room}) => {
    const playersLeft = room.capacity - room.players.length;
    const players = room.players.map((item, index) => {
        return (<li key = {index}>{item.name || item}</li>);
    });
    const text = playersLeft === 0 ? 
        "This room is full." : 
        "Missing "+playersLeft+" players to start the game.";

    return (
    	<div>
			<label className="info-label">People in the room:</label>
        	<ul className="modal-list-peoples">
                {players}
            </ul>
        	<div>
            	<label className="info-label">
                    {text}
                 	<span className="right">
                        {room.players.length}/{room.capacity}
                    </span>
                </label>
            </div>
        </div>
    );
}

PlayersList.propTypes = {
    room: PropTypes.object.isRequired,
}
export default PlayersList;