import { Button, Nav, Navbar } from 'react-bootstrap';
import { publicRoutes } from '../config/routes';
import { Link } from 'react-router-dom';
import userStore from '../../stores/userStore';
import { observer } from 'mobx-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';



const Header = observer(()=>{
    const navigate = useNavigate();
    const logout = () => {
        userStore.logoutUser();
        navigate('/');
        toast.info('Вы вышли с аккаунта!')
    }
  
      
      

    return (
        <Navbar expand='lg' bg='primary' variant='dark' className=''>
            <Navbar.Brand>
                SITE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='burger'>

            </Navbar.Toggle>
            <Navbar.Collapse id='burger'>
            {/* {Для гостя} */}
                
                {userStore.isAuth ? <Button type='button' variant='danger' onClick={() => {logout()}}>Выйти</Button> : <Nav>
                    {publicRoutes.map((el,i)=><Nav.Link key={i} to={el.path} as={Link}>{el.name}</Nav.Link>)}
                </Nav>}
            </Navbar.Collapse>
        </Navbar>
    );
})

export default Header;