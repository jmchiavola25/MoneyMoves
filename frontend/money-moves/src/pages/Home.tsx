import moneyMovesLogo from '../assets/moneymoves.png'
import '../styles/Home.css'

import { useNavigate } from 'react-router-dom'

function Home() {

    const nav = useNavigate();

    const handleLogoClick = () => {
       nav('/login');
    }

  return (
    <div className="home">
      <div className="header-container">
        <a target="_blank">
          <img src={moneyMovesLogo} className="logo moneymoves" alt="MoneyMoves logo" onClick={handleLogoClick}/>
        </a>
        <h1 id="appTitle">Money Moves</h1>
      </div>
    </div>
  )
}

export default Home;
