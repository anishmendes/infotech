import HeaderImage from '../../assets/mobilepic.jpg'
import data from './data'
import './header.css'
const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Medhavhi:School & Learning Management System</h3>
        <p> Medhavhi, the all -in-one platform connecting school, students, techers, and parents, simplifying education, communication, and collaboration for a seamless learning experience.

        </p>
        <div className="header_cta">
          <a href="#contact"className='btn primary' >Get started</a>
          <a href="#portfolio" className='btn light'>Create School</a>
        </div>
        <div className="header_socials">
          {
           data.map(item => <a key={item.id} href={item.link} target="_blank" 
           rel='noopener noreferrer'> {item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
