import './css/style.css'
import O from "./assets/O.png"
import X from "./assets/X.png"

function Play({player}) {
  if(player === 1){
    return(
      <img src='./assets/X.png'></img>
    )
  }else{
    return(
      <img src='./assets/O.png'></img>
    )
  }
}

export default Play;