import axios from 'axios';

let memberStore = {
    namespaced: true,
    state: {
        isLogin: false,
        isLoginError: false,
        userInfo: null,
        isValidToken: false,
    },
};