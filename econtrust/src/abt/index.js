import './index.css';

import about from '../images/bta.jpg';
function Abouts(){
    return(
        <>
       <div>
            <h1>About Us</h1>
            </div>
            <div id="abouted">
            <pre>EconTrust is a product<br/> developed by Samaa group,<br/>the product is developed with a human<br/>
                 centered approach thinking <br/>to enable users to save <br/>and track their savings<br/>
                and set goals on their saving </pre>
                <div>
                    <img id='abt' src={about}/>
        
                </div>
        </div>
        </>
    )
}
export default Abouts;
