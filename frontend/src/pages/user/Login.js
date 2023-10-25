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
                <center><img src={logo} alt='logo' className='logo1' /></center>
                <center><h1 className='welcome'><b>Welcome</b></h1></center>
                <Form className='form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" style={{ borderRadius: '50px', width: '120%', fontSize: '14px', height: '150%' }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" style={{ borderRadius: '50px', width: '120%', fontSize: '14px' }} />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        <div className='forget-password' onClick={() => { /* Handle Forget Password action */ }}>
                            Forget Password
                        </div>
                    </Form.Text>
                    <Button type="submit" style={{ borderRadius: '50px', width: '120%', backgroundColor: '#114DA9' }}>
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
