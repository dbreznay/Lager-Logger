import React from 'react';
import PropTypes from 'prop-types';

const List = ({rooms, showRoomInfo}) => {
    if(rooms.size === 0)
        return (<center><p>There are no rooms. You can create one and play against bots!</p></center>);
    return(
        <table className="bordered rooms-list">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                rooms.map((item, index) => (       
                    <tr 
                        key={item.name} data-room-id={item.name} 
                        data-room-name={item.name}
                        onClick={showRoomInfo}>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            <td>{`${item.players.length}/${item.capacity}`}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}
List.propTypes = {
	rooms: PropTypes.object.isRequired,
	showRoomInfo: PropTypes.func.isRequired
}
export default List;