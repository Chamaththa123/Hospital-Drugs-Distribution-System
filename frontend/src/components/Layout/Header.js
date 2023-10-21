import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import user from '../../assets/medical-team.png';
import notification from '../../assets/notification.png';

function Header() {
  return (
    <Navbar className="bg-body-tertiary" style={{boxShadow:'none',position:'fixed',width:'82%',marginLeft:'-0%'}}>
      <Container className="header-container">
        <Navbar.Brand href="#home">Southwest Health Hospital</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <img src={notification} alt='user' className='notification'/>
         <div className='user-name'>
            User Name
         </div>
          <img src={user} alt='user' className='user'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;