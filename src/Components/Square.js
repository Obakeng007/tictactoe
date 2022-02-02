import React from 'react';
import '../App.js';

const Squarestyling ={
    flex: '33%',
    border: '1px solid black',
    cursor: 'pointer',
    heght: '100%',
    width: '100%',
    display: 'grid',
    placeItems: 'center'
  }


export function Square({value, selectSquare}){

   return <div style={ Squarestyling } onClick={selectSquare}>
        { value }
    </div>

}


export default Square;