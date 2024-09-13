import "../style/App.scss";
import Navbar from "./Navbar";
import color from "../assets/color.mp4";
import "../style/App.scss";


function App() {
 
  return (
   
    <div className="App">
      
      <video className="video-tag" width="100%" autoPlay loop muted >
        <source src={color} type="video/mp4" />
       
      </video>
    </div>
  );
}

export default App;
