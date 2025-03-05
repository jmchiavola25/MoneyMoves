import moneyMovesLogo from '../../assets/moneymoves.png';
import './TitleAndLogo.css';

import {Link} from 'react-router-dom';

interface LogoAndTitleProps {
  handleLogoClick: () => void;
  isLogoNextToTitle: boolean;  // New prop for layout control
}

function LogoAndTitle({ handleLogoClick, isLogoNextToTitle }: LogoAndTitleProps) {
  return (
    <div className={`header-container ${isLogoNextToTitle ? 'horizontal' : 'vertical'}`}>
        <Link to="/login" onClick={handleLogoClick}>
          <img src={moneyMovesLogo} className="logo moneymoves" alt="MoneyMoves logo" />
        </Link>
        <h1 id="appTitle">Money Moves</h1>
    </div>
  );
}

export default LogoAndTitle;
