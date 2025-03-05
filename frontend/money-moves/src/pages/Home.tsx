import TitleAndLogo from '../components/TitleAndLogo/TitleAndLogo'
import '../styles/Home.css'

import { useNavigate } from 'react-router-dom'

function Home() {

    const nav = useNavigate();

    const handleLogoClick = () => {
       nav('/login');
    }

  return (
    <div className="home">
      <TitleAndLogo handleLogoClick={handleLogoClick} isLogoNextToTitle={true}/>
    </div>
  )
}

export default Home;
