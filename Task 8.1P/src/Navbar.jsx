import React from 'react';
import navBarItem from './navBarItem';
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className="NavbarItems">
            <h1 className="page-name">iService</h1>
            <ul className="nav-menu">
                {navBarItem.map((item,i)=>{
                    return(
                        <li key={i}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })

                }

            </ul>
        </nav>

    )
}

export default Navbar