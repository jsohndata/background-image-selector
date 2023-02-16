import "./backgroundContainer.css"

export default function BackgroundContainer( {currentBg, handleRandomBG}) {

    return (
        <div style={{"backgroundImage": `url(/images/${currentBg}`}} 
             className="bg-container">
                <div className="bg-box">
                    <button onClick={ handleRandomBG }>We are all buttons</button>
                    <p><a href="https://github.com/jsohndata/random-background-image.git" target="_blank" rel="noreferrer">See Code in GitHub</a></p>
                </div>
        </div>
    )
}