// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    tossRes: 0,
  }

  coinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({tossRes: tossResult})
      this.setState(pre => ({heads: pre.heads + 1}))
    } else {
      this.setState({tossRes: tossResult})
      this.setState(pre => ({tails: pre.tails + 1}))
    }
  }

  render() {
    const {heads, tails, tossRes} = this.state
    return (
      <div className="coin-toss-game">
        <div className="coin-toss">
          <div className="bg-con">
            <h1>Coin Toss Game</h1>
            <p>Heads (or) Tails</p>
            {tossRes === 0 ? (
              <img
                alt="toss result"
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                className="img-con"
              />
            ) : (
              <img
                alt="toss result"
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                className="img-con"
              />
            )}
            <button onClick={this.coinToss} type="button">
              Toss Coin
            </button>
            <div className="bottom-con">
              <p>Total:{heads + tails}</p>
              <p>Heads:{heads}</p>
              <p>Tails:{tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
