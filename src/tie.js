import './css/style.css'
import O from "./assets/O.png"
import X from "./assets/X.png"

function Tie(){
    const restart = () => window.location.reload();
    return(
        <>
            <h2 id='win'>It's a tie</h2>
            <div className='restart'>
                <button id='restart' onClick={restart}>Restart</button>
            </div>
        </>
    )
}

export default Tie;