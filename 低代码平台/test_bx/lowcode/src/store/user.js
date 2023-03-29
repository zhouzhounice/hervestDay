import { defineStore } from 'pinia'

export const UserStore = defineStore('User',{
    state:() =>{
        return {
            userInfo:{}
        }
    },
    getters:{
        getUserMsg:(state) =>{
            return state.userInfo
        }
    }
})