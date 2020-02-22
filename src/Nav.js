import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return(
        <>
        <Link to='/'>
        Home
        </Link>
        <Link to='/work-history'>
        Work History
        </Link>
        <Link to='/contact'>
        Contact
        </Link>
        </>
    )
}

export default Nav