import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


let  Navbar=(props)=> {


        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className='fab fa-github'/> {props.title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>   
            </nav>
        )
    
};

 // when nothing is pass to props then it take default values
 Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

// Props type for type checking
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;