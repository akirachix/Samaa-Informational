import "./index.css"
import iconss from '../Images/iconss.png'
import Chama from '../Images/Chama.jpg'

const LandingPage=()=>{

    return(
        <>
        <div className="landingpage">
        <div className="Text">
        <div>
          <p id='paragraph'>Let some elegance<br/>Into your finance</p>
          <p className="paragraph">
            Simplify your financial journey with us
            <br/>
            <br/>
            Join us today and experience hassle free saving
          </p>
        </div>
        <div>
        
        <img  src={Chama} alt="chama" id="chama" />

      </div>
      </div>
      <button id="learnmore"><b>Learn more</b></button>
      <br />
      <div className='icons'>
      <img  src={iconss} alt="icons" id="icons" />

      </div>

      </div>
      </>
    )


}
export default LandingPage