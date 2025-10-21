import { useState, useEffect } from 'react';
import Card from "./Card.jsx";
import SwipeBar from './SwipeBar.jsx';
  
function App() {
  const [cats, setCats] = useState([]);
  const [topCard, setTopcard] = useState(0);
  const [isShuffling, setShuffling] = useState(false);

  useEffect(() => {
    
  fetch("http://74.48.196.51:5000/api/breeds?limit=3").then((response) => response.json())
  .then((catsData) => {
    console.log(catsData);
    setCats(catsData);
  }).catch(error => {
      console.error('Fetch error detected. API possibly down. Details:', error);
  });
  }, []);

  return (
    <>
    <div id="feed">
    {cats.map((cat, index) => (
      <Card topCard={topCard} 
      onAnimationEnd={() => setShuffling(false)} 
      {...cat} 
      key={index} 
      id={index}/>
    ))}
    </div>
    

    <SwipeBar onClick={() => setTopcard(cardIndex => {
      setShuffling(true);
      setTopcard((cardIndex + 1) % 3)})} 
      active={!isShuffling} />
    </>
  );
};

export default App;
