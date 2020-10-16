import React from 'react';
import ReactModal from 'react-modal';
import Content from '../Content/Details/index';

const modalStyle = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex         : "999"
    }
};

const PlayerInfoModal = (props) => {
	return(
		<ReactModal
			className="scene--hall__reactModal"
	    	isOpen={props.isOpen}
	        style={modalStyle}
	        onRequestClose={props.onCloseModal}
	        shouldCloseOnOverlayClick={true}
	        contentLabel="Player Info">
	        	<Content {...props} />
	    </ReactModal>
	);
}
export default PlayerInfoModal;