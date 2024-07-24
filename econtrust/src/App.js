
import Landingpage from "./Landingpage";
import Navbar from "./Navbar";

import About from "./About";
import Services from "./Services";
import Mission  from "./Mission";
import Vision from "./Vision";

import Team from "./Team"
import Footer from "./Footer";
function App(){
  return(
    <div>
      <Navbar/>
      <Landingpage/>
      <About/>
      <Services/>

      <Mission/>
      <Vision/>
      <Team/>
      <Footer/>
      
 </div>
  );
 
}
export default App;
