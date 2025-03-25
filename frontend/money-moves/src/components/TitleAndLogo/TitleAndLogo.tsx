import moneyMovesLogo from '../../assets/moneymoves.png';
import './TitleAndLogo.css';

import {Link} from 'react-router-dom';

interface TitleAndLogoProps {
  handleLogoClick: () => void;
  isLogoNextToTitle: boolean;  // New prop for layout control
}

function TitleAndLogo({ handleLogoClick, isLogoNextToTitle }: TitleAndLogoProps) {
  return (
    <div className={`header-container ${isLogoNextToTitle ? 'horizontal' : 'vertical'}`}>
        <Link to="/login" onClick={handleLogoClick}>
          <img src={moneyMovesLogo} className="logo moneymoves" alt="MoneyMoves logo" />
        </Link>
        <h1 id="appTitle">Money Moves</h1>
    </div>
  );
}

export default TitleAndLogo;
