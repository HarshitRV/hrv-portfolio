import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>
    <div className="Header">
      <div className="name">
        {/* <img src="https://pbs.twimg.com/profile_images/1564180600382054400/pQOmGGFo_400x400.jpg" alt="" srcset="" /> */}
        <div className='logo-container'>
          {/* <h3>Hritvik Mohan</h3> */}
          <Link to="/"><h3 className='logo'>harshitRV</h3></Link>
          {/* <h3>Hi, I'm Hritvik<span className='emoji'>🥤</span></h3> */}
          {/* <p>Frontend Developer</p> */}
        </div>
      </div>
      <div className="links">
        <div className='icons'>
          <div>
            <a href="https://github.com/harshitrv" target="_blank"><i class="bi bi-github"></i></a>
          </div>
          <div>
            <a href="https://twitter.com/hrv_vishwakarma" target="_blank"><i class="bi bi-twitter"></i></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/harshitrv" target="_blank"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        {/* <div className='resume'>
          <a href='https://drive.google.com/file/d/1H-3U0OWmvIwAfJRYK10pkj5Un-tFX8wA/view?usp=sharing' target="_blank">Resume.pdf</a>
        </div> */}
      </div>
    </div>
    </>
  )
}
