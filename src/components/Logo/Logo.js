import React from 'react'
import Tilty from 'react-tilty';
import './Logo.css'
import homer from './homer.png'

const Logo = () => {
    return (
        <Tilty className="Tilt br2 shadow-2 mh3" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"> <img src={homer} alt="logo" /></div>
        </Tilty>
    );
}

export default Logo;