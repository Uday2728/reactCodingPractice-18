// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="navBar">
      <div className="logo-container">
        <img
          className="emoji"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-heading">Emoji Game</h1>
      </div>
      <div id="scoreContainer" className="score-container">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
