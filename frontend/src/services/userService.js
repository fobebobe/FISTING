import axios from 'axios';
import { toast } from 'react-toastify';

export const postUser = async (for_user) => {
    await axios.post('http://localhost:3008/user/create', { email:for_user.email, username: for_user.username, password: for_user.password })
    .then(response => { toast.success('Вы успешно зарегистрировались!'); })
    .catch(err => { toast.error('Не удалось зарегистрироваться!')  })
};

export const loginUser = async (for_user) => {
    return await axios.post('http://localhost:3008/user/login', { email: for_user.email, password: for_user.password })
    .then(response => { toast.success(`Вы успешно вошли в аккаунт! Здравствуйте, ${response.data.username}!`); return response.data })
    .catch(err => { toast.error('Неправильный логин или пароль!') })
};