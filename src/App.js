import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [cards, setcards] = useState(['あ',　'い',　'う',　'え',　'お',　'か',　'き', 'く', 'け', 'こ']);
  const [picked, setPicked] = useState([]);

  // equivalent to componentDidMount lifecycle method
  useEffect(() => {
    const selectItem = (e) => {
      const key = e.target.key;
      console.log('key is ' + key);
      console.log(cards[key]);
      console.log(e.key);
      console.log(e['data-key']);
      //cards[key].concat(picked); 
    }; 
    const cardSelector = document.querySelectorAll('.card');
    cardSelector.forEach((card) => window.addEventListener('click', selectItem));

    }, []);

  return (
    <div id='container'>
      <header>Memory Card Game</header>
      {returnList(cards)}
      <footer>Made by Aaron L.</footer>
    </div>
  );
}

function returnList(listName) {
  if(listName.length === 0) return;
  
  return (
    <ul id='cards-list'>
      {listName.map((item, index) => {
        return <div key={index}><li key={index} data-key={index} className='card'>{item}</li></div>
      })}
    </ul>
  )
}
export default App;
