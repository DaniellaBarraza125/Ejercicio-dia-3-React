import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <header>
    <nav>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/books'>Reservas</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header