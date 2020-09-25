import {REMOVE_ADDRESS} from './type'
const state={};

const mutations={
    [REMOVE_ADDRESS](state,rootState){
        console.log(state,rootState);
    }
}


export default {
    namespaced:true,
    state,
    mutations
}