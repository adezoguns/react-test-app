import {React } from 'react';
import ControlPane from './ControlPane.jsx'

function HomePage(){

    return(
        <>
            <div className="main">
                <div>
                    <ControlPane/>
                </div>
                <div>Hello world</div>
            </div>      
        </>
    )
}

export default HomePage;