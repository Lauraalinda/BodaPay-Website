import Navbar from './Navbar'
import Rectangles from '../assets/BodaPayWebicons/Rectangles.png'
import Phone1 from '../assets/BodaPayWebicons/Phone1.png'
import Rectangle4 from '../assets/BodaPayWebicons/Rectangle4.png'
import appstore from '../assets/BodaPayWebicons/appstore.png'
import playstore from '../assets/BodaPayWebicons/playstore.png'

function Header() {
  return (

    <header>

      <div className='header'>
        <Navbar />
        <div className='landingpage'>
          <img src={Rectangles}></img>
          <div className='landingpage_content'>
            <h1>Digital Wallets , Seamless payments & More BodaPay</h1>
            <p>BodaPay provides you with a simple, seamless and secure way to freely move your money cross-border on your own terms. To get started, sign up and download the BodaPay App today.</p>
            <button class='btn'>
              <p><span>DOWNLOAD ON THE</span> APPSTORE</p> <img src={appstore}></img>
            </button>
            <button class='btn google'>
              <p><span>GET IT ON</span> GOOGLE PLAY</p> <img src={playstore}></img>
            </button>
            <div class='display'>
              <img class='Phone1' src={Phone1}></img>
            </div>
          </div>
        </div>

        <div className='numbers'>
          <div className='number first'>
            <h3>18<span>M</span></h3>
            <p>Use Boda</p>
          </div>
          <div className='number second'>
            <h3>120<span>+</span></h3>
            <p>Downloads</p>
          </div>
          <div className='number third'>
            <h3>4.2<span>7</span></h3>
            <p>Rating BodaPay</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header