import { observable, action, makeAutoObservable } from 'mobx';
import { loginUser, postUser } from '../src/services/userService';

class UserStore {

    username = '';
    email = '';
    isAuth = false;
    token = '';

    constructor() {
        makeAutoObservable(this);
    }

    logoutUser() {
        this.isAuth = false;
        this.username = '';
        this.email = '';
        this.token = '';
    }
    addUser(userInfo) {
        postUser(userInfo)
    }
    authUser(userInfo){
        loginUser(userInfo).then((reponse) => {if(reponse) {
            this.username = reponse.username;
            this.isAuth = true;
            this.email = reponse.email
            this.token = reponse.token
        }})
        console.log(this.token)
    }
}

const userStore = new UserStore();
export default userStore;