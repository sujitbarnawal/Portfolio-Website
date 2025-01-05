import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import about_profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title ">
        <h1>About me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="about-section">
        <div className="about-left">{/* <img src={about_profile} /> */}</div>
        <div className="about-right ">
          <div className="about-para  ">
            <p>
              I create websites using web languages such as HTML, CSS, and
              JavaScript that allow users to access and interact with the site
              or app
            </p>
            <p>
              My passion for frontend development is reflected in every projects
              I have made.
            </p>
          </div>
          <div className="about-skills  ">
            <div className="about-skill ">
              <p className="min-w-[150px] text-[24px] font-500 ">HTML & CSS</p>
            </div>

            <div className="about-skill ">
              <p className="min-w-[150px] text-[24px] font-500 ">Javascript</p>
            </div>

            <div className="about-skill ">
              <p className="min-w-[150px] text-[24px] font-500 ">React JS</p>
            </div>

            <div className="about-skill ">
              <p className="min-w-[150px] text-[24px] font-500 ">
                Tailwind CSS
              </p>
            </div>

            <div className="about-skill ">
              <p className="min-w-[150px] text-[24px] font-500 ">Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>50+</h1>
            <p>PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>1</h1>
            <p>HAPPY CLIENT</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
