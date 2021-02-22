import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Settings from './Settings';

const Nav = ({userName, newNoteBtnDisplay, toggleDisplay, listDisplay, toggleList}) => {
    const { logout } = useAuth0();

    return (
        <nav className="navbar navbar-light bg-light mb-5">
            <span className="navbar-brand mb-0 h1 mr-auto">Welcome, {userName}</span>

            <button 
                className={"nav-item layout-dropdown btn btn-success mr-3 " + (newNoteBtnDisplay ? '' : 'hidden')}
                onClick={toggleDisplay}
            >
                <h5>
                    New Note <i className="fas fa-plus-circle ml-1"></i>
                </h5>
            </button>

            <button className={"nav-item btn btn-info mr-3 " + (listDisplay ? 'hidden' : '')} onClick={toggleList}>
                <h5>See Notes <i className="far fa-address-book"></i></h5>
            </button>

            <button className="nav-item btn btn-warning text-white"  onClick={() => logout()}>
                <h5>Log out</h5>
            </button>

            <Settings />
        </nav>
    )
}

export default Nav;