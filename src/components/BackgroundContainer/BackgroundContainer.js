import { useState } from 'react';
import { bgList } from '../../data/bgList.js'
import "./backgroundContainer.css"

export default function BackgroundContainer() {
    const[currentBg, setCurrentBg] = useState(bgList[0].image);    

    function handleBG( title ) {
        switch(title) {
            case 'photoA':
                return setCurrentBg(bgList[0].image)
            
            case 'photoB':
                return setCurrentBg(bgList[1].image)

            case 'photoC':
                return setCurrentBg(bgList[2].image)

            case 'photoD':
                return setCurrentBg(bgList[3].image)

            case 'photoE':
                return setCurrentBg(bgList[4].image)

            case 'photoF':
                return setCurrentBg(bgList[5].image)                
          
            default:
                return setCurrentBg(bgList[0].image)
        }
    }

    return (
        <div style={{"backgroundImage": `url(/images/${currentBg}`}}
             className="bg-container">
                <div className="bg-box">
                    <button onClick={ () => handleBG("photoA") }>Photo A</button>
                    <button onClick={ () => handleBG("photoB") }>Photo B</button>
                    <button onClick={ () => handleBG("photoC") }>Photo C</button>
                    <button onClick={ () => handleBG("photoD") }>Photo D</button>
                    <button onClick={ () => handleBG("photoE") }>Photo E</button>
                    <button onClick={ () => handleBG("photoF") }>Photo F</button>

                    <p><small><a 
                        href="https://github.com/jsohndata/random-background-image/tree/specific" 
                        target="_blank" 
                        rel="noreferrer">See Code in GitHub</a></small></p>
                </div>
        </div>
    )
}