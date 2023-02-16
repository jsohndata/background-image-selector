import "./backgroundContainer.css"

export default function BackgroundContainer( {currentBg, handleRandomBG}) {

    return (
        <div style={{"backgroundImage": `url(/images/${currentBg}`}} 
             className="bg-container">
                <div className="bg-box">
                    <button onClick={ handleRandomBG }>Button</button>
                    <p><small><a href="https://github.com/jsohndata/random-background-image.git" target="_blank" rel="noreferrer">See Code in GitHub</a></small></p>
                </div>
        </div>
    )
}