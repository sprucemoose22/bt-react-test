import './header.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <div className="Header">
            <img src ={logo} alt="BT Logo"/>
            <h1>BT React Code Test - by Luke Jones - 04/05/2021</h1>
        </div>
    );
}

export default Header;