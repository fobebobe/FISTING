import { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import userStore from '../../stores/userStore';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

const Auth = observer(()=>{

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const [password, setPassword] = useState('');

    const authorizate = () => {
        setEmail(''); setPassword('');
        userStore.authUser({email, password});
        
    }

    useEffect(() => {
        if(userStore.isAuth) {
            navigate('/navigate')
        }
    }, [userStore.isAuth])

    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>
        Почта
                    </Form.Label>
                    <Form.Control name='username' type='text' value={email} onChange={(el) => {setEmail(el.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
        Пароль
                    </Form.Label>
                    <Form.Control name='password' type='password' value={password} onChange={(el) => {setPassword(el.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Button type='button' variant='primary' className='w-100' onClick={() => {authorizate()}}>Авторизоваться</Button>
                </Form.Group>
            </Form>
        </Container>
    )
})

export default Auth;