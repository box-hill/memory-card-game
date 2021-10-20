import React, { useState, useEffect, useCallback } from "react";
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(['あ',　'い',　'う',　'え',　'お',　'か',　'き', 'く', 'け', 'こ']);
  const [picked, setPicked] = useState(undefined);
  const [displayedCards, setDisplayedCards] = useState(undefined);

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
      const key = e.target.getAttribute('data-key');
      if(picked === undefined) {
        console.log('picked is undef');
        setPicked(chosen);
      } else if (picked.includes(chosen)) {
        console.log('has been picked');
      } else {
        setPicked(picked.concat(chosen));
        setScore(score + 1);
      }
      console.log('clicked: ' + chosen + ' | Picked: ' + picked)
      console.log('-----------');
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

  }, [picked]);


  return (
    <div id='container'>
      <header>Memory Card Game</header>
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
