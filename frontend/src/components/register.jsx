import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { observer } from 'mobx-react';
import userStore from '../../stores/userStore';
import {useNavigate} from 'react-router-dom';


const Register = observer(() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const goUser = () => {
        setUsername(''); setPassword(''); setEmail('')
        userStore.addUser({username, password, email})
    }
    


    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Имя
                    </Form.Label>
                    <Form.Control name='username' type='text' value={username} onChange={(e) => {setUsername(e.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Почта
                    </Form.Label>
                    <Form.Control name='email' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Пароль
                    </Form.Label>
                    <Form.Control name='password' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Button type='button' variant='primary' className='w-100' onClick={() => {goUser()}}>Зарегистрироваться</Button>
                </Form.Group>
            </Form>
        </Container>
    )
})

export default Register;