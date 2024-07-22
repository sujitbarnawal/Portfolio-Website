import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero '>
      <img  src={profile}  />
      <h1 ><span>I am Sujit Barnawal, </span>frontend developer based in Nepal.</h1>
      <p >I focus on the development of visual and interactive elements of a website that users interact with directly</p>
      <div className='hero-action '>
        <div className="hero-connect"><AnchorLink offset={50} href='#contact' className='alink'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
