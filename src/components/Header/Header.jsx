import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className="container header-container">
                <h1 className="header-logo">
                    <Link to={'/'}>shop</Link>
                </h1>
                <nav className="header-nav">
                    <Link to={'/home'}>home</Link>

                    <Link to={'/cart'}>cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
