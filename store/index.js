import {createStore} from 'redux';

const progressReducer = (state = {precent: 0}, action) =>{
    return {
        precent: action.amount
    }
}


const store = createStore(progressReducer);

export default store;