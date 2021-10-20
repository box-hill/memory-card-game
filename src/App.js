import React, { useState, useEffect, useCallback } from "react";
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(['あ',　'い',　'う',　'え',　'お',　'か',　'き', 'く', 'け', 'こ']);
  const [picked, setPicked] = useState(undefined);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const selectItem = (e) => {
      const chosen = e.target.innerHTML;
      if(picked === undefined) {
        // Player starts a new game and selects any option
        console.log('picked is undef');
        setPicked(chosen);
        if( bestScore < score + 1 ) {setBestScore(score + 1)};
        setScore(score + 1);   
      } else if (picked.includes(chosen)) {
        // Player selects wrong option
        setScore(0);
        setPicked(undefined);
      } else {
        // Player selects correct option
        setPicked(picked.concat(chosen));
        if( bestScore < score + 1 ) {setBestScore(score + 1)};
        setScore(score + 1);
      }
  }; 
  
  useEffect(() => {    
    let arrayCopy = [...cards];
    shuffleArray(arrayCopy);
    setCards(arrayCopy);

    const cardSelector = document.querySelectorAll('.card');
    cardSelector.forEach((card) => card.addEventListener('click', selectItem));

    return () => {
      const cardSelector = document.querySelectorAll('.card');
      cardSelector.forEach((card) => card.removeEventListener('click', selectItem));      
    };

  }, [picked, score]);


  return (
    <div id='container'>
      <header>
        <div id='game-name'>Memory Card Game</div>
        <div>Score: {score}</div>       
        <div>Best Score: {bestScore}</div>
      </header>
      
      {returnList(cards)}
      <footer>Made by Aaron L.</footer>
    </div>
  );
}

function returnList(listName) {
  if(listName.length === 0 || undefined) return null;
  
  return (
    <ul id='cards-list'>
      {listName.map((item, index) => {
        return <div key={index}><li key={index} className='card'>{item}</li></div>
      })}
    </ul>
  )
}
export default App;
