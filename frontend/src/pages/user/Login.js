import React from 'react';
import './Login.css';
import Auth from '../../components/Layout/Auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../assets/logo.png';

function Login() {
    return (
        <div className="login-container">
            <div className="column1">
                <Auth />
            </div>
            <div className="column2">
                <center><img src={logo} alt='sd' className='logo' /></center>
                <center><h1 className='welcome'><b>WELCOME</b></h1></center>
                <Form className='form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Registered No</Form.Label>
                        <Form.Control type="email" placeholder="Enter Registered No" style={{ borderRadius: '50px', width: '120%', fontSize: '14px' }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" style={{ borderRadius: '50px', width: '120%', fontSize: '14px' }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button type="submit" style={{ borderRadius: '50px', width: '120%',backgroundColor:'#114DA9' }}>
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
