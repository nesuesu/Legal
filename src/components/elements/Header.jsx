import logo from '../../images/scitus logo.png'

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <div className='flex'>
            <div className='logo'>
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
            </div>

            <div className='menu'>
                <Link to={'/'} className='menuitem'>Home</Link>
            </div>

            {/* {loggedInUser ?
                <UserInfo/>
            : */}

            <div className='login'>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>

            {/* } */}
            </div>
        </header>
    )
}

export default Header;