import Square from "./Components/Square"
import { useState, useEffect } from 'react';

const boardstyling ={
flexDirection: 'column',
width: '500px',
height: '500px',
display: 'flex',
backgroundColor: 'aquamarine',
border: '1px solid black',
}

const boardBody ={
  marginTop: '400px',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
}

const row ={
  display: 'flex',
  border: '1px solid black',
  flex: '33%',
  flexDirection: 'row'
}



function App() {
  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [isPlayer, setPlayer] = useState("X");
  const [results, setResults] = useState({winner: " none ", state: "none"});

  useEffect(() => {
    isWinner();
    if (isPlayer === ("X")){
      setPlayer("O")
    }
    else { (setPlayer("X"))}
  }, [board]);

  useEffect(() => {
    if (results.state !== "none"){

      alert('Game finished! Winner is player: ', results.winner)
    }
  }, [results]);

  const clickSquare = (squareData) => {setBoard(
    board.map((value,boardData) =>{
      if (boardData === squareData && value === ""){
        return isPlayer;
      }
      return value;
    })

  )
  };

  const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8]
  ];

  const isWinner = () =>{
    pattern.forEach((currentPattern) => {
    const playerOne = board[currentPattern[0]];
    if (playerOne === "") return;

    let winningPattern = true
    currentPattern.forEach((value) => {
      if (board[value] !== playerOne){

        winningPattern = false;
      }
    } 
    );

    if (winningPattern){
      setResults({winner: isPlayer, state: "won"})
    }
    }
    )
  }
  
  return (
    <div style={ boardBody }>
      <div style={ boardstyling }>

        <div style={ row } >
          <Square value={ board[0] } selectSquare={ () => {clickSquare(0)}} />
          <Square value={ board[1] } selectSquare={ () => {clickSquare(1)}}/>
          <Square value={ board[2] } selectSquare={ () => {clickSquare(2)}} />
        </div>

        <div style={ row }>
          <Square value={ board[3] } selectSquare={ () => {clickSquare(3)}} />
          <Square value={ board[4] } selectSquare={ () => {clickSquare(4)}}/>
          <Square value={ board[5] } selectSquare={ () => {clickSquare(5)}} />
        </div>
        
        <div style={ row }>
          <Square value={ board[6] } selectSquare={ () => {clickSquare(6)}} />
          <Square value={ board[7] } selectSquare={ () => {clickSquare(7)}} />
          <Square value={ board[8] } selectSquare={ () => {clickSquare(8)}} />
        </div>
      </div>
    </div>
  );
}

export default App;
