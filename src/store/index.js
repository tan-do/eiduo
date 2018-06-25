import Vue from 'vue'
import vuex from 'vuex'
import { get } from 'https';
Vue.use(vuex);

export default new vuex.Store({
    state:{
        user: null,   //保存学生信息
    },
    getters:{
        getUser(state){
            if(!state.user){
                //user : {token : abchdhdhfhnfh,key1:val1,key2:value2}
                state.user = JSON.parse(localStorage.getItem('user'));
            }
            return state.user
        }
    },
    mutations:{
        setUser(state,value){
            state.user = value;
            localStorage.setItem('user',value);
            let token = "absdjfgkkglkgjkdfhgh";
            localStorage.setItem('token',token);
        },
        removeUser(state){
            state.user = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token')
        }

    }
})
