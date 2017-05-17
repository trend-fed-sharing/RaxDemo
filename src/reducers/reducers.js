import { combineReducers } from 'redux';
import { ADD_DUMMY_DATA } from '../actions/actions';

function listData(state = [1,2,3,4,5,6,7,8,9,10], action){
  switch(action.type){
    case ADD_DUMMY_DATA:
      console.log(state);
      return state.concat([1,2,3,4,5,6,7,8,9,10]);
    default:
      return state;
  }
}

const testApp = combineReducers({
  listData,
});

export default testApp