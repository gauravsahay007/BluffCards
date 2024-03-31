import React,{useState,useEffect} from 'react';



const shuffleCards = () => {
  var cards = [
    "2C", "6S", "AD", "2D", "7D", "AS", "2S", "7H",
    "3C", "7S", "JC", "3D", "8C", "JD", "3H", "8D",
    "JH", "3S", "8H", "JS", "4C", "8S", "KC", "4D",
    "9C", "KD", "4H", "9D", "KH", "4S", "9H", "KS",
    "5C", "9S", "10C", "5D", "10D", "QD", "5H", "10D",
    "QH", "5S", "10H", "QS", "6C", "10S", "6D", "AC",
    "6H", "aces" , "2H", "red_back", "blue_back"
  ];

    const listCopy = [...cards];
    for (let i = listCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listCopy[i], listCopy[j]] = [listCopy[j], listCopy[i]];
    }
    return listCopy;
  
}

export {shuffleCards}


