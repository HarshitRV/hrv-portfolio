import './About.css'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'

function About() {
  return (
    <div className='about'>
      <div className='bio-img-text-container'>
        <img className='bio-img' src="https://pbs.twimg.com/profile_images/1564180600382054400/pQOmGGFo_400x400.jpg" alt="" />
        <div className='bio-container'>
            <h2 className='bio-heading'>Hi, I'm Harshit Kr Vishwakarma.</h2>
            {/* <div className='bio-hr'></div> */}
            <p>Welcome I'm a <span className='active-tab'>Fullstack Developer</span> currently pursuing my Master's of Computer Application from VIT Vellore. I have a strong passion for web development with expertise in Backend Development. </p>
            <p>I also have experience in creating decentralized application on Blockchain aka web3.</p>
        </div>
      </div>
      <div className=''>
        <Skills />
        <Education />
      </div>
    </div>
  )
}

export default About