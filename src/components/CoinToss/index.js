import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tossResult: 0, headsCount: 0, tailsCount: 0}

  onClickTossCoin = () => {
    const value = Math.floor(Math.random() * 2)
    const {headsCount, tailsCount} = this.state
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount
    if (value === 0) {
      updatedHeadsCount = headsCount + 1
    } else {
      updatedTailsCount = tailsCount + 1
    }
    this.setState({
      tossResult: value,
      tailsCount: updatedTailsCount,
      headsCount: updatedHeadsCount,
    })
  }

  render() {
    const {tossResult, tailsCount, headsCount} = this.state
    const imgUrl =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="coin-toss-app-container">
        <div className="coin-toss-card">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="toss-coin-button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="quantity-container">
            <p className="quantity">Total: {headsCount + tailsCount}</p>
            <p className="quantity">Heads: {headsCount}</p>
            <p className="quantity">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
