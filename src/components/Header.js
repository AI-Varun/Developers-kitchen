import Logo from '.././assetss/img/appLogo.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import { useSelector } from 'react-redux';
import store from '../utils/store';


const loggedInUser = () => {
    // API call to authentication
    return false;
}

const Title = () => (
    <Link to="/">
        <img className="h-28 px-5" alt="logo" src={Logo} />
    </Link>
);

const Header = () => {
    const isOnline = useOnline();
    const cartItem = useSelector(store => store.cart.items);
    console.log(cartItem);
    return (
        <div className="flex justify-between bg-red-50 shadow-lg sm:bg-red-100 md:bg-fuchsia-100 lg:bg-amber-100">
            <Title />
            <div className="nav-items">
                <ul className='flex py-10 gap-2'>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/instamart">
                            Instamart
                        </Link>
                    </li>
                    <li>Cart - {cartItem.length} items</li>
                </ul>
            </div>
            <h1>{isOnline ? '✅' : '🔴'}</h1>
            {loggedInUser() ? <button> Log Out</button> : <button> Log In</button>}
        </div>
    );
};

export default Header;