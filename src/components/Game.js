import React from 'react';
import Board from './Board';

class Game extends React.Component{
  render(){
    return(
      <div>
        <div>Game</div>
        <div><Board /></div>
      </div>
    );
  }
}

export default Game;
