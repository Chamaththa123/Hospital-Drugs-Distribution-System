import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'
import img from '../../assets/ww.jpg'

function Auth() {
    return (
        <div>
            <img src={img} alt='s' style={{ width: '100%', height: '100vh' }} className='img' />
        </div>
    )
}

export default Auth
