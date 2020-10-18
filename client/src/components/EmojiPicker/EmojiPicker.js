import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

class EmojiPicker extends Component {
constructor(props) 
const App = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    return (
        <div>
            <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} skinTone={SKIN_TONE_MEDIUM_DARK} groupNames={{smileys_people:"PEOPLE"}}/>
            { chosenEmoji && <EmojiData chosenEmoji={chosenEmoji}/>}
        </div>
    );
};

const EmojiData = ({chosenEmoji}) => (
  <div>
    <strong>Unified:</strong> {chosenEmoji.unified}<br/>
    <strong>Names:</strong> {chosenEmoji.names.join(', ')}<br/>
    <strong>Symbol:</strong> {chosenEmoji.emoji}<br/>
    <strong>ActiveSkinTone:</strong> {chosenEmoji.activeSkinTone}
  </div>
);

render(<App />, document.getElementById('root'));

};

export default EmojiPicker;