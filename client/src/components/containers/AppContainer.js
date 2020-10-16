import App from '../../App';
import {Container} from 'flux/utils';
import CommonMenuStore from '../../store/reducers/CommonMenuStore';
import RoomListAction from '../../store/actions/RoomListAction';
import RoomInfoAction from '../../store/actions/RoomInfoAction';
import CreateRoomAction from '../../store/actions/CreateRoomAction';
import CommonHallStore from '../../store/reducers/CommonHallStore';
import CommonGameStore from '../../store/reducers/CommonGameStore';
import HallAction from '../../store/actions/HallAction';
import GameAction from '../../store/actions/GameAction';
import socket from '../../store/DefaultSocket';

function getStores () 
{
	return [
		CommonMenuStore,
		CommonHallStore,
		CommonGameStore
	];
}
function getState () 
{
	return {
		menu:{
			state: CommonMenuStore.getState(),
			roomList: RoomListAction.getActions(),
			roomInfo: RoomInfoAction.getActions(),
			createRoom: CreateRoomAction.getActions(),
			socketID:   socket.getSocket().id
		},
		hall:{
			state: CommonHallStore.getState(),
			...HallAction.getActions(),
			socketID: socket.getSocket().id
		},
		game: {
			state: CommonGameStore.getState(),
			...GameAction.getActions(),
			socketID: socket.getSocket().id
		}
	};
}
export default Container.createFunctional(App, getStores, getState);