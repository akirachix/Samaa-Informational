import Hawa from '../images/Hawa.png';
import Vivian from '../images/Vivian.png';
import Nairat from '../images/Nairat.png';
import Zippy from '../images/Zippy.png';
import Casey from '../images/Casey.png';
import Kur from   '../images/Kur.png'
import './index.css';
const Team = () => {
    return(
      <>
      <div id='team'>
      <h1 >Our Team</h1>
<div id="team">
<div id="team-photos">
     <div >
     <figure id="team-figcap">
        <img id="pic" src={Casey} alt="Casey Minu"/>
        <figcaption id="figcap-text">Casey Minu</figcaption>
      
     </figure>
     </div>
     <div>
     <figure id="team-figcap">
        <img id="pic" src={Nairat} alt="Nairat Shallo"/>
        <figcaption id="figcap-text">Nairat Shallo</figcaption>
       
     </figure>
     </div>
     <div>
     <figure id="team-figcap">
        <img id="pic" src={Zippy} alt="Zippy Waluse"/>
        <figcaption id="figcap-text">Zippy Waluse</figcaption>
        
     </figure>
     </div>
     <div >
     <figure id="team-figcap">
        <img id="pic" src={Kur} alt="Kur Achan"/>
        <figcaption id="figcap-text">Kur Achan</figcaption>
      
     </figure>
     </div>
     <div>
     <figure id="team-figcap">
        <img id="pic" src={Hawa} alt="Hawa Majid"/>
        <figcaption id="figcap-text">Hawa Majid</figcaption>
       
     </figure>
     </div>
     <div>
     <figure id="team-figcap">
        <img id="pic" src={Vivian} alt="Mary Vivian"/>
        <figcaption id="figcap-text">Mary Vivian</figcaption>
        
     </figure>
     </div>
     
</div>
</div>
</div>
      </>

    )
}
export default Team;