import { FaBars } from 'react-icons/fa'
import logo1 from '../assets/BodaPayWebicons/logo1.png'

function Navbar() {
    return (

        // how could u have done ths
        <div className='top'>
            <div className='logo'>
                <img className='bp-logo' src={logo1} ></img>
            </div>
            <nav>
                <FaBars className='burger-menu' />
            </nav>
        </div>
    )
}

export default Navbar