import logo from '../../images/scitus logo.png'

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import { Link } from 'react-router-dom';

import UserInfo from './UserInfo';

const Header = () => {
    
    const {loggedInUser} = useContext(UserContext);

    return (
        <header>
        <div className='flex'>

            <div className='logo'>
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
            </div>

            <div className='menu'>
                <Link to={'/'} className='menuitem'>Home</Link>
            </div>

            {loggedInUser ?
                <UserInfo />
            :
            <div className='login'>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
            }
            
        </div>
        </header>
    )
}

export default Header;