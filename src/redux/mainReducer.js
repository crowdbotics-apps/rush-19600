import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp1491678Reducer from '../features/SignUp1491678/redux/reducers'
import SignUp1591677Reducer from '../features/SignUp1591677/redux/reducers'
import SignUp1391676Reducer from '../features/SignUp1391676/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp1491678: SignUp1491678Reducer,
SignUp1591677: SignUp1591677Reducer,
SignUp1391676: SignUp1391676Reducer,

});