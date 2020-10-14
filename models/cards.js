const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    cardValue: { type: String, required: true },
    src: { type: String},
    rules: { type: String}
});

const Card = mongoose.model("Card", cardSchema);

/*switch (cards) {
    case 'Ace':
      console.log('Bottoms UP for 5 seconds! If on a zoom call chug until the person to your left stops chuggin!');
      break;
    case 'Two':
      console.log('YOU get to choose who drinks!');
      break;
    case 'Three':
      console.log('Three is ME, baby. drink up!');
      break;
    case 'Four':
      console.log('Four is FLOOR! Last person to play the down-emoji takes a sip');
      break;
    case 'Five':
      console.log('Five is GUYS. Fellas take a drink.');
      break;
    case 'Six':
      console.log('Six is CHICKS. Ladies you know what to do.');
      break;
    case 'Seven':
      console.log('Seven is HEAVEN. Last person to play the hands up emoji drinks.');
      break;
    case 'Eight':
        console.log('Eight is MATE. Pick someone else to be your mate and when one of you sips the other must as well.');
        break;
    case 'Nine':
        console.log('Nine is RHYME. DONT GET COCKY.. Its harder when you drink. The person to your right rhymes with your word and whoever messes up must drink.');
        break;
    case 'Ten':
        console.log('Ten is CATEGORIES. Pick a category and go around the table until someone cant come up with an answer.');
        break;
    case 'Jack':
        console.log('Jack is NEVER-HAVE-I-EVER. Three fingers up.. Go around the table and whoever is left with no fingers first must sip sip sip!');
        break;
    case 'Queen':
        console.log('Queen is QUESTIONS. You pose a question to anyone in the game. They in turn answer your question with a question. This goes around until someone does not respond with a question.');
        break;
    case 'King':
        console.log('King is RULE. Pick a rule and whoever breaks that rule must drink. Once another king card is drawn a new rule will be in place.');
        break;
    default:
      console.log('wanna play a game?');
  }
  
  console.log("Wanna donate to an organization?");*/

module.exports = Card;