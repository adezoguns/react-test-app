import { useState } from 'react';


function Header(){
const [param, setParam]=useState(0);

    return(
        <>
            <div className="header">
                <div className="logo">I-medical</div>

                <div className="header-searcher-bundle">
                   <a href="/Home">Home</a>
                   <a href="/Products">Products</a>
                   <a href="/About us">About us</a>
                   <button className="header-signin">SignIn</button>
                   <input className="header-search" type="text" placeholder="Search" />
                   <button className="header-button" onClick={() => setParam(param + 1)}>Search</button>
                </div>
            </div>
        </>
    )
}
export default Header;
