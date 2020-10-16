
import React, { Component } from 'react';
import Title from '../../components/MenuTitle/index';
import RoomsList from '../../components/RoomsList/index';
import RoomInfoModal from '../../components/RoomInfoModal/index';
import CreateRoomModal from '../../components/CreateRoomModal/index';
import AboutModal from '../../components/AboutModal/index';
import { Container, Row, Col, Footer, Button, Section } from 'reactstrap';

import './styles.css';

class Menu extends Component {
	componentDidMount() {
		document.title = "Uno - Choose Room";
	}
	render(){

		return (

			<Section className="scene--menu">

				<Container>

		            <Row>

		            	<Col className="col l10 s12 push-l1 push-s0">

		                	<Title />

		              	</Col>

		            </Row>

		            <Row className="row">

		            	<Col className="col l6 s12 push-l3 push-s0">

		                	<RoomsList 
		                  		status = {this.props.state.getIn(['roomList', 'status'])}
		                  		rooms = {this.props.state.getIn(['roomList', 'rooms'])}
		                  		onOpenRoom = {this.props.roomInfo.onOpenRoom} 
		                  		init = {this.props.roomList.init}
		                  		loadAll = {this.props.roomList.loadAll}/>

		              	</Col>

		           	</Row>

		            <Row className="row">

		            	<Col className="col l6 s12 push-l3 push-s0">

		               		<Button className="waves-effect waves-light btn blue hoverable" 
		                  		onClick = {this.props.createRoom.onOpenModal}>
		                    		Create Room
		                	</Button>

		                	<Button className="waves-effect waves-light btn blue hoverable right" 
		                  		onClick = {this.props.createRoom.aboutStates(true)}>
		                    		About
		                	</Button>

		              	</Col>

		            </Row>

          		</Container>

		        <Footer className="foot">
		        	Created by #:
		        </Footer>

		        <RoomInfoModal 
		        	isOpen = {this.props.state.getIn(['roomInfo', 'isOpen'])}
		        	displayedRoom = {this.props.state.getIn(['roomInfo', 'displayedRoom'])}
		        	message = {this.props.state.getIn(['roomInfo', 'message'])}
		        	onCloseRoom = {this.props.roomInfo.onCloseRoom}
		        	join = {this.props.roomInfo.join}
		        	history= {this.props.history}/>
		        <CreateRoomModal
		        	isOpen = {this.props.state.getIn(['createRoom', 'isOpen'])}
		        	message = {this.props.state.getIn(['createRoom', 'message'])}
		        	created = {this.props.state.getIn(['createRoom', 'created'])}
		        	onCloseModal = {this.props.createRoom.onCloseModal}
		        	onCreate = {this.props.createRoom.onCreate}
		        	history= {this.props.history}/>
		        <AboutModal 
		        	isOpen = {this.props.state.get('aboutModal')}
		        	onCloseModal = {this.props.createRoom.aboutStates(false)}/>
			</Section>

        );
        
    }
    
}

export default Menu;