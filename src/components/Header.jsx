import profilePicture from '../assets/tasya_bulat.png'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} alt="Anastasya Capritiani Marpaung" />
        <h3>Anastasya Capritiani Marpaung</h3>
        <p>System Analyst - Quality Assurance</p>
        <div className='socialMedia'>
          <a href='https://instagram.com/tasyacapritianii_' target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a>
          <a href='https://linkedin.com/in/Anastasya Capritiani Marpaung' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/anastasyamarpaung' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href='https://twitter.com/tasyacapritiani' target='_blank' rel='noopener noreferrer'>
            <FaTwitter />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header