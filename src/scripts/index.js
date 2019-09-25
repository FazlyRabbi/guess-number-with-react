import React from 'react';
import ReactDOM from 'react-dom';
import Score from "./componets/score"

const App = () => {

  return (
    <>
      <Score />
    </>
  );
};

//rendering in ui
ReactDOM.render(<App/>,document.querySelector('.container'));
