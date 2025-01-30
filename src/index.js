import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import Play from "./Play";
import Win from "./win";
import O from "./assets/O.png";
import X from "./assets/X.png";
import Tie from "./tie";
import Multiplayer from "./Multiplayer";
import Singleplayer from "./Singleplayer";

let places = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let player = 1;

function verifywin() {
  let verifygame = 0;
  let section = ReactDOM.createRoot(document.querySelector(".turn"));
  if (
    (places[0][0] === 1 && places[0][1] === 1 && places[0][2] === 1) ||
    (places[0][0] === 2 && places[0][1] === 2 && places[0][2] === 2)
  ) {
    if (places[0][0] === 1) {
      section.render(<Win player={1} />);
      verifygame = 1;
    } else {
      section.render(<Win player={2} />);
      verifygame = 1;
    }
  } else if (
    (places[1][0] === 1 && places[1][1] === 1 && places[1][2] === 1) ||
    (places[1][0] === 2 && places[1][1] === 2 && places[1][2] == 2)
  ) {
    if (places[1][0] === 1) {
      section.render(<Win player={1} />);
      verifygame = 1;
    } else {
      section.render(<Win player={2} />);
      verifygame = 1;
    }
  } else if (
    (places[2][0] === 1 && places[2][1] === 1 && places[2][2] === 1) ||
    (places[2][0] === 2 && places[2][1] === 2 && places[2][2] === 2)
  ) {
    if (places[2][0] === 1) {
      section.render(<Win player={1} />);
      verifygame = 1;
    } else {
      section.render(<Win player={2} />);
      verifygame = 1;
    }
  } else if (
    (places[0][0] === 1 && places[1][0] === 1 && places[2][0] === 1) ||
    (places[0][0] === 2 && places[1][0] === 2 && places[2][0] === 2)
  ) {
    if (places[0][0] === 1) {
      section.render(<Win player={1} />);
      verifygame = 1;
    } else {
      section.render(<Win player={2} />);
      verifygame = 1;
    }
  } else if (
    (places[0][1] === 1 && places[1][1] === 1 && places[2][1] === 1) ||
    (places[0][1] === 2 && places[1][1] === 2 && places[2][1] === 2)
  ) {
    if (places[0][1] === 1) {
      section.render(<Win player={1} />);
      verifygame = 1;
    } else {
      section.render(<Win player={2} />);
      verifygame = 1;
    }
  } else if (
    (places[0][2] === 1 && places[1][2] === 1 && places[2][2] === 1) ||
    (places[0][2] === 2 && places[1][2] === 2 && places[2][2] === 2)
  ) {
    if (places[0][2] === 1) {
      section.render(<Win player={1} />);
      verifygame = 1;
    } else {
      section.render(<Win player={2} />);
      verifygame = 1;
    }
  } else if (
    (places[0][0] === 1 && places[1][1] === 1 && places[2][2] === 1) ||
    (places[0][0] === 2 && places[1][1] === 2 && places[2][2] === 2)
  ) {
    if (places[0][0] === 1) {
      section.render(<Win player={1} />);
      verifygame = 1;
    } else {
      section.render(<Win player={2} />);
      verifygame = 1;
    }
  } else if (
    (places[0][2] === 1 && places[1][1] === 1 && places[2][0] === 1) ||
    (places[0][2] === 2 && places[1][1] === 2 && places[2][0] === 2)
  ) {
    if (places[0][2] === 1) {
      section.render(<Win player={1} />);
      verifygame = 1;
    } else {
      section.render(<Win player={2} />);
      verifygame = 1;
    }
  } else {
    let aux = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (places[i][j] !== null) {
          aux++;
        }
      }
    }
    if (aux === 9) {
      section.render(<Tie />);
      verifygame = 1
    }
  }
  return verifygame;
}

export function turnwithAI() {
  let selectplace = localStorage.getItem("place");
  let place = ReactDOM.createRoot(document.getElementById(selectplace));
  switch (selectplace) {
    case "space1":
      if (places[0][0] === null) {
        places[0][0] = player;
        place.render(<Play player={player} />);
      }
      break;
    case "space2":
      if (places[0][1] === null) {
        places[0][1] = player;
        place.render(<Play player={player} />);
      }
      break;
    case "space3":
      if (places[0][2] === null) {
        places[0][2] = player;
        place.render(<Play player={player} />);
      }
      break;
    case "space4":
      if (places[1][0] === null) {
        places[1][0] = player;
        place.render(<Play player={player} />);
      }
      break;
    case "space5":
      if (places[1][1] === null) {
        places[1][1] = player;
        place.render(<Play player={player} />);
      }
      break;
    case "space6":
      if (places[1][2] === null) {
        places[1][2] = player;
        place.render(<Play player={player} />);
      }
      break;
    case "space7":
      if (places[2][0] === null) {
        places[2][0] = player;
        place.render(<Play player={player} />);
      }
      break;
    case "space8":
      if (places[2][1] === null) {
        places[2][1] = player;
        place.render(<Play player={player} />);
      }
      break;
    case "space9":
      if (places[2][2] === null) {
        places[2][2] = player;
        place.render(<Play player={player} />);
      }
      break;
  }
  document.getElementById("number").innerText = "AI";
  let proceed = verifywin();
  if(proceed !== 1){
    fetch("http://localhost:5000/aiTurn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Pos_1: places[0][0],
        Pos_2: places[0][1],
        Pos_3: places[0][2],
        Pos_4: places[1][0],
        Pos_5: places[1][1],
        Pos_6: places[1][2],
        Pos_7: places[2][0],
        Pos_8: places[2][1],
        Pos_9: places[2][2],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "Game situation has not been recivied") {
          console.error("Game situation has not been recivied");
        } else {
          processAIResponse(data.action);
        }
        function processAIResponse(action) {
          let aiPlace;
          switch (parseInt(action)) {
            case 1:
              aiPlace = ReactDOM.createRoot(document.getElementById("space1"));
              places[0][0] = 2;
              break;
            case 2:
              aiPlace = ReactDOM.createRoot(document.getElementById("space2"));
              places[0][1] = 2;
              break;
            case 3:
              aiPlace = ReactDOM.createRoot(document.getElementById("space3"));
              places[0][2] = 2;
              break;
            case 4:
              aiPlace = ReactDOM.createRoot(document.getElementById("space4"));
              places[1][0] = 2;
              break;
            case 5:
              aiPlace = ReactDOM.createRoot(document.getElementById("space5"));
              places[1][1] = 2;
              break;
            case 6:
              aiPlace = ReactDOM.createRoot(document.getElementById("space6"));
              places[1][2] = 2;
              break;
            case 7:
              aiPlace = ReactDOM.createRoot(document.getElementById("space7"));
              places[2][0] = 2;
              break;
            case 8:
              aiPlace = ReactDOM.createRoot(document.getElementById("space8"));
              places[2][1] = 2;
              break;
            case 9:
              aiPlace = ReactDOM.createRoot(document.getElementById("space9"));
              places[2][2] = 2;
              break;
          }
  
          aiPlace.render(<Play player={2} />);
  
          verifywin();
  
          player = 1;
          document.getElementById("number").innerHTML = "1";
        }
      });
  }
}

export function turn() {
  let selectplace = localStorage.getItem("place");
  let place = ReactDOM.createRoot(document.getElementById(selectplace));
  switch (selectplace) {
    case "space1":
      if (places[0][0] === null) {
        places[0][0] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
    case "space2":
      if (places[0][1] === null) {
        places[0][1] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
    case "space3":
      if (places[0][2] === null) {
        places[0][2] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
    case "space4":
      if (places[1][0] === null) {
        places[1][0] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
    case "space5":
      if (places[1][1] === null) {
        places[1][1] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
    case "space6":
      if (places[1][2] === null) {
        places[1][2] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
    case "space7":
      if (places[2][0] === null) {
        places[2][0] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
    case "space8":
      if (places[2][1] === null) {
        places[2][1] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
    case "space9":
      if (places[2][2] === null) {
        places[2][2] = player;
        place.render(<Play player={player} />);
        if (player === 1) {
          player++;
        } else {
          player--;
        }
      }
      break;
  }
  document.getElementById("number").innerText = player;
  verifywin();
}

function RenderMultiplayer() {
  const body = ReactDOM.createRoot(document.querySelector("body"));
  body.render(<Multiplayer />);
}

function RenderSingleplayer() {
  const body = ReactDOM.createRoot(document.querySelector("body"));
  body.render(<Singleplayer />);
}

window.RenderSingleplayer = RenderSingleplayer;
window.RenderMultiplayer = RenderMultiplayer;
window.turn = turn;
window.turnwithAI = turnwithAI;
window.verifywin = verifywin;
