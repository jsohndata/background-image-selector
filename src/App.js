import { useState } from 'react';
import BackgroundContainer from './components/BackgroundContainer';
import { bgList } from './data/bgList.js'
import './App.css';


function App() {
  const[currentBg, setCurrentBg] = useState(bgList[0]);

  const handleRandomBG = () => {
    setCurrentBg( 
      bgList[Math.floor(Math.random()*bgList.length)] 
    )
  }

  return (
    <BackgroundContainer
      currentBg={currentBg} 
      handleRandomBG={handleRandomBG} />
  );
}

export default App;
