import './index.css';
import twitter from './twitter.png';
import instagram from './instagram.png';
import facebook from './facebook.png';
const Footer = () => {
    return(
        <>
<div className="footer">
    <p className='eco'>@2024 Econ Trust</p>
    <div className='icons'>
    <img className='icon1' src={twitter} />
    <img className='icon1' src={instagram}/>
    <img className='icon1' src={facebook}/>
    {/* <p>{price}</p> */}

    </div>

    <br></br>
    <div className='attributes'>
    <p className='pro'><b>Features</b></p>
    <p>Savings</p>
    <p>Loans</p>
    <p>Resources & 
         Materials</p>
    </div>
    {/* <br></br> */}
    <div className='firm'>
    <p className='comp'><b>Company</b></p>
    <p> Team</p>
     <p>About Us</p>
    <p> Contact</p>
    </div>
    
    <div className='valid'>
<p><b className='ligal'>Legal</b></p>
    <p>Privacy Policy</p>
    <p>Terms of Use</p>
    <p>Cookies Policy</p>
    </div>
   
   
    
</div>
</>
    );
};
export default Footer;