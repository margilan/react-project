import './App.css'
import bg from "../images/Rectangle\ 10.png"
import images from "../images/Cheerful-Indian-College-Student-Girl-Transparent-Image\ 1.png";
function App() {
  return (
    <div className="all-wrapper">
      <div className="header">
        <div className="a">
        <a href="#"><h1>LOGO</h1></a>
        </div>
        <div className="uls">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Gallery</li>
            <li>About</li>
          </ul>
        </div>
        <div className="buttons">
          <a className='first' href="#"><button>Contact</button></a>
          <a className='three' href="#"><button>Get Started</button></a>
        </div>
      </div>

      <div className="sections">
        <div className="images">
        <img src={images} alt="images" />  

        <div className="bg">
        <img src={bg} alt="images" />  
        </div>  
        </div>
        <div className="text-all">
          <div className="one-text">
            <p>Join a Community of Achievers</p>
          </div>
          <div className="thre-text">
            <h3>Begin your learning journey today!</h3>
          </div>
          <div className="buton">
            <a href="#"><button>Learn More</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
