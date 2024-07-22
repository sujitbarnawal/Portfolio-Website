import './Works.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Works = () => {
  return (
    <div id='work' className='works'>
      <div className="works-title">
        <h1 >My Latest Works</h1>
        <img src={theme_pattern} />
      </div>
      <div className="works-container ">
        {mywork_data.map((work, index) => {
          return (
            <img key={index} src={work.w_img} className='works-image' />
          )
        })}
      </div>
      <a href="https://github.com/sujitbarnawal" target='_blank'>
        <div className="works-showmore ">
          <p>Show More</p>
          <img src={arrow_icon} />
        </div>
      </a>
    </div>
  )
}

export default Works
