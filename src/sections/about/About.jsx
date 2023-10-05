import AboutImage from '../../assets/about.jpg'
import Cv  from '../../assets/cv.pdf'
import {AiOutlineDownload} from 'react-icons/ai'
import './about.css'
const About = () => {
  return (
  
  <section id="about">
    <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={AboutImage} alt="About Image" />
        </div>
      </div>
      <div className="about__right">
       
        <div className="about__cards"></div>
        <h2>
          Experience the power of algorithm-assisted routine creation
        </h2>
        <p>
        Our school management system introduces the innovative "Create Algorithm Assisted Routine" feature, designed to simplify and optimize the process of creating and managing school timetables. By leveraging advanced algorithms and intelligent scheduling techniques, this feature revolutionizes the way school administrators and staff handle routine creation.
        </p>
       
       <a href={Cv} download className='btn primary'>Download Course
       <AiOutlineDownload/></a>
      </div>
    </div>
  </section>
  )
}

export default About
