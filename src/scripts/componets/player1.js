import React from 'react';

const Player1 = props => {
  const myStyle = {
    marginRight: '8px'
  };

  return (
    <React.Fragment>
      <button
        style={myStyle}
        onClick={props.handleIncrease}
        disabled={props.state.winner === true ? true : false}
        className={' btn btn-primary'}
      >
        Player1
      </button>
    </React.Fragment>
  );
};

export default Player1;
