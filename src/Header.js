import logo from './logo.png'
import './Header.css'

export default function Header() {
    return(
        <div className="header">
            <div className='header__content'>
                <img src={logo} alt="" />
                <p>my travel journal.</p>
            </div>
        </div>
    )
}