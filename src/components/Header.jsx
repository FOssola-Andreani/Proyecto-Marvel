import React, { useContext } from 'react';
import StateProvider from "../context/AppCharacterContext";
import '../styles/Header.scss';

const Header = ( { children } ) => {
    const userLogin = localStorage.getItem( "userLogin" );
    const context = useContext( StateProvider );
    const imageLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxADeAL_L36X5ukqXbgV2Um_SwioAz-QcGKmyfCPXpZjzH3kC_XVoF1nZ0vVpirNQxgPk&usqp=CAU";

    const logoutHandle = () => {
        context.logOut();
    }

    return (
        <>
            <nav>
                <div className="navbar-left">
                    <img src={imageLogo} alt="logo" className="logo" />
                </div>
                <div className="navbar-right">
                    <ul>
                        <li className="navbar-email">{userLogin}</li>
                        <li>
                            <a href="/" onClick={logoutHandle}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
        </>
    )
};

export default Header;