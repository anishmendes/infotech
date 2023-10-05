import Logo from '../../assets/logo (2).jpg'
import data from './data'
import {BiColor} from 'react-icons/bi'
import './navbar.css'

const Navbar = () => {
  return(
    <nav>
      <div className="container nav__container">
      <a href='index.html' className='nav__logo'>
        <img src={Logo}  alt="Logo" />
      </a>
     <ul className='nav__menu'>
      {
        data.map(item => <li key={item.id}> <a href={item.link}>{item.title}</a></li>)
      }
     </ul>
     <button id='theme__icon'>
      <BiColor/>
     </button>
      </div>
    </nav>
  )
}


export default Navbar