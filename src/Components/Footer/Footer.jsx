import './Footer.css'
// import user_icon from '../../assets/user_icon.svg'
import facebook_icon from '../../assets/facebook.svg'
import instagram_icon from '../../assets/instagram.svg'
import twitter_icon from '../../assets/twitter.svg'
import github_icon from '../../assets/github.svg'

const Footer = () => {
    return (
        <div className='footer'>
            {/* <div className="footer-top">
                <div className="footer-top-left">
                    <div className='footer-logo-name'>SUJIT</div>
                    <p>I am a frontend developer from Nepal. I am very interested in making websites UI design.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div> */}
            <div className="footer-links ">
                <a href="https://www.facebook.com/sujit.barnawal.skb" target='_blank'><img src={facebook_icon} className='footer-link' /></a>
                <a href="https://www.instagram.com/sujit_barnawalskb" target='_blank'><img src={instagram_icon} className='footer-link' /></a>
                <a href="https://x.com/csitsujit" target='_blank'><img src={twitter_icon} className='footer-link' /></a>
                <a href="https://github.com/sujitbarnawal" target='_blank'><img src={github_icon} className='footer-link' /></a>
            </div>
            <hr />
            <div className="footer-bottom ">
                <p className="footer-bottom-left">Copyright &#169; Sujit Barnawal. All rights reserved.</p>
                <div className='footer-bottom-right '>
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
