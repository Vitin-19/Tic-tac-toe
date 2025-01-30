import './css/style.css'
import O from "./assets/O.png"
import X from "./assets/X.png"

function Win({player}){
  const restart = () => window.location.reload();
    if(player == 1){
      return(
        <>
            <h2 id='win'>Player 1 wins!</h2>
            <div className='restart'>
                <button id='restart' onClick={restart}>Restart</button>
            </div>
        </>
      )
    }else{
      return(
        <>
            <h2 id='win'>Player 2 wins!</h2>
            <div className='restart'>
                <button id='restart' onClick={restart}>Restart</button>
            </div>
        </>
      )
    }
}

export default Win;