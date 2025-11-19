import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card";
import { use, useEffect, useState } from "react";

const cardValues = [
"🐉","🦄","🐦‍🔥","🐻","🦖","🐟","🐥","🐸",
"🐉","🦄","🐦‍🔥","🐻","🦖","🐟","🐥","🐸"
]

function App() {
  
  //console.log(cardValues);

  const [cards, setCards] = useState([])

  const intializeGame = () => {
    const finalCards = cardValues.map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }));
    
    setCards(finalCards);

  };

  //console.log(finalCards);

  useEffect(() => {
    intializeGame();
  }, []);
  
  return  <div className = "app">
    <GameHeader score={12} moves={15}/>

    <div className="cards-grid">
        {cardValues.map((card, index) => (
          <Card card={card}/>
        ))}
    </div>

  </div>
}

export default App
