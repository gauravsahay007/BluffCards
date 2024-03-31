import React,{useState,useEffect} from 'react';

import twoC from "../Cards/2C.png";
import twoD from "../Cards/2D.png";
import twoH from "../Cards/2H.png";
import sixS from "../Cards/6S.png";
import aD from "../Cards/AD.png";
import sevenD from "../Cards/7D.png";
import aS from "../Cards/AS.png";
import twoS from "../Cards/2S.png";
import sevenH from "../Cards/7H.png";
import threeC from "../Cards/3C.png";
import sevenS from "../Cards/7S.png";
import jC from "../Cards/JC.png";
import threeD from "../Cards/3D.png";
import eightC from "../Cards/8C.png";
import jD from "../Cards/JD.png";
import threeH from "../Cards/3H.png";
import eightD from "../Cards/8D.png";
import jH from "../Cards/JH.png";
import threeS from "../Cards/3S.png";
import eightH from "../Cards/8H.png";
import jS from "../Cards/JS.png";
import fourC from "../Cards/4C.png";
import eightS from "../Cards/8S.png";
import kC from "../Cards/KC.png";
import fourD from "../Cards/4D.png";
import nineC from "../Cards/9C.png";
import kD from "../Cards/KD.png";
import fourH from "../Cards/4H.png";
import nineD from "../Cards/9D.png";
import kH from "../Cards/KH.png";
import fourS from "../Cards/4S.png";
import nineH from "../Cards/9H.png";
import kS from "../Cards/KS.png";
import fiveC from "../Cards/5C.png";
import nineS from "../Cards/9S.png";
import tenC from "../Cards/10C.png";
import fiveD from "../Cards/5D.png";
import tenD from "../Cards/10D.png";
import qD from "../Cards/QD.png";
import fiveH from "../Cards/5H.png";
import tenH from "../Cards/10H.png";
import qH from "../Cards/QH.png";
import fiveS from "../Cards/5S.png";
import tenS from "../Cards/10S.png";
import qS from "../Cards/QS.png";
import sixC from "../Cards/6C.png";
import sixD from "../Cards/6D.png";
import aC from "../Cards/AC.png"; 
import sixH from "../Cards/6H.png";
import aces from "../Cards/aces.png";
import blue_back from "../Cards/blue_back.png";
import red_back from "../Cards/red_back.png";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const cardImages = {
  "2C": twoC,
  "6S": sixS,
  "AD": aD,
  "2D": twoD,
  "7D": sevenD,
  "AS": aS,
  "2S": twoS,
  "7H": sevenH,
  "3C": threeC,
  "7S": sevenS,
  "JC": jC,
  "3D": threeD,
  "8C": eightC,
  "JD": jD,
  "3H": threeH,
  "8D": eightD,
  "JH": jH,
  "3S": threeS,
  "8H": eightH,
  "JS": jS,
  "4C": fourC,
  "8S": eightS,
  "KC": kC,
  "4D": fourD,
  "9C": nineC,
  "KD": kD,
  "4H": fourH,
  "9D": nineD,
  "KH": kH,
  "4S": fourS,
  "9H": nineH,
  "KS": kS,
  "5C": fiveC,
  "9S": nineS,
  "10C": tenC,
  "5D": fiveD,
  "10D": tenD,
  "QD": qD,
  "5H": fiveH,
  "QH": qH,
  "5S": fiveS,
  "10H": tenH,
  "QS": qS,
  "6C": sixC,
  "10S": tenS,
  "6D": sixD,
  "AC": aC,
  "6H": sixH,
  "aces": aces,
  "2H" : twoH,
  "blue_back" : blue_back,
  "red_back" : red_back
};

export default function shuffleCards() {
  try{

    const cards = [
        "2C", "6S", "AD", "2D", "7D", "AS", "2S", "7H",
        "3C", "7S", "JC", "3D", "8C", "JD", "3H", "8D",
        "JH", "3S", "8H", "JS", "4C", "8S", "KC", "4D",
        "9C", "KD", "4H", "9D", "KH", "4S", "9H", "KS",
        "5C", "9S", "10C", "5D", "10D", "QD", "5H", "10D",
        "QH", "5S", "10H", "QS", "6C", "10S", "6D", "AC",
        "6H", "aces" , "2H", "red_back", "blue_back"
      ];
      const dispatch = useDispatch();
      const room = useSelector(state => state.room);
      const [shuffledList, setShuffledList] = useState(cards);
      const shuffleList = () => {
        const listCopy = [...cards];
        for (let i = listCopy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [listCopy[i], listCopy[j]] = [listCopy[j], listCopy[i]];
        }
        setShuffledList(listCopy);
      };
    
      useEffect(() => {
        shuffleList();
      }, []);
    
      const distributeCards = () => {
        const numUsers = room.users.length;
        const numCards = shuffledList.length;
        const idealCardsPerUser = Math.floor(numCards / numUsers);
        const remainingCards = numCards % numUsers;
    
        const distributedCards = {};
    
        let cardIndex = 0;
    
        // Distribute ideal number of cards to each user
        for (let i = 0; i < numUsers; i++) {
          const userId = room.users[i];
          const numCardsToDistribute = idealCardsPerUser + (i < remainingCards ? 1 : 0);
          distributedCards[userId] = shuffledList.slice(cardIndex, cardIndex + numCardsToDistribute);
          cardIndex += numCardsToDistribute;
        }
       
      }; 

      return distributedCards();

  }
  catch(err){
    console.log(err);
    return null;
  }
}
