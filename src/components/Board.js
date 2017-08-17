import React from 'react';
import Square from './Square';

class Board extends React.Component{
  render(){
    return(
      <div>
        <div>Board</div>
        <div><Square /></div>
      </div>
    );
  }
}

export default Board;
