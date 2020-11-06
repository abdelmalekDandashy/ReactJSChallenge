import React from 'react'
import Mylogo from '../assets/images/EURISKO-MOBILITY.png'
function Header() {
    return (

        <div>
            <nav className="navbar navbar-light ">
       
            <img src={Mylogo} width="200px" height="100px"  alt=""/>
            <h2 className='text-white  '>MOVIES DATABASE</h2>
        </nav>
        </div>

        
    )
}

export default Header
