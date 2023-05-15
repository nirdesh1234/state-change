import "./app.css";
import { useState } from "react";
import AnimalShow from "./animalshow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>

      <div className="animal-list">
        {animals.map((animal, index) => {
          return <AnimalShow key={index} animal={animal} />;
        })}
      </div>
    </div>
  );
}

export default App;
