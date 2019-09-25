import React from 'react';

const Player2 = props => {
  const myStyle = {
    marginRight: '8px'
  };
  return (
    <React.Fragment>
      <button
        style={myStyle}
        onClick={props.handleIncrease}
        disabled={props.state.winner === true ? true : false}
        className={" btn btn-primary"} >
        Player2
      </button>
    </React.Fragment>
  );
};

export default Player2;
