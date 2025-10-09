import { useState, useEffect } from 'react';
import Card from "./Card.jsx";
  
function App() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    
  fetch("https://tinpurrs.fly.dev/api/breeds?limit=3").then((response) => response.json())
  .then((catsData) => {
    console.log(catsData);
    setCats(catsData);
  });
  }, []);

  return (
    <>
    {cats.map((cat) => (
      <Card {...cat} />
    ))}
    </>
  );
};

export default App;
