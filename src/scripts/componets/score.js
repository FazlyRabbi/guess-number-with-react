import React, { Component } from 'react';
import Player1 from './player1';
import Player2 from './player2';

export default class Score extends Component {
  state = {
    P1Score: 0,
    P2Score: 0,
    winingScore: 10,
    winner: false
  };

  P1handleIncreaseNum = () => {
    this.setState({
      P1Score: (this.state.P1Score += Math.floor(
        Math.random() * (this.state.winingScore - this.state.P1Score) + 1
      )),
      winner:
        this.state.P1Score >= this.state.winingScore
          ? (this.state.winner = true)
          : false
    });
  };

  P2handleIncreaseNum = () => {
    this.setState({
      P2Score: (this.state.P2Score += Math.floor(
        Math.random() * (this.state.winingScore - this.state.P2Score) + 1
      )),
      winner:
        this.state.P2Score >= this.state.winingScore
          ? (this.state.winner = true)
          : false
    });
  };

  handleResetNum = () => {
    this.setState({
      P1Score: (this.state.P1Score = 0),
      P2Score: (this.state.P2Score = 0),
      winner: (this.state.winner = false)
    });
  };

  render() {
    return (
      <>
        <p className='heading'>Let's play</p>
        {this.state.winner === true && (
          <p className='winingMsg'>
            hurra!{' '}
            {this.state.P1Score === this.state.winingScore
              ? 'Player1'
              : 'Player2'}{' '}
            is winner winner
          </p>
        )}
        <p className='playingNumber'>
          <span>{this.state.P1Score}</span> TO <span>{this.state.P2Score}</span>
        </p>
        <p className='winingScore'>playing to:{this.state.winingScore}</p>

        <Player1 handleIncrease={this.P1handleIncreaseNum} state={this.state} />
        <Player2 handleIncrease={this.P2handleIncreaseNum} state={this.state} />
        <button className={' btn btn-primary'} onClick={this.handleResetNum}>
          reset
        </button>
      </>
    );
  }
}
