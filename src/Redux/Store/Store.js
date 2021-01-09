import {reducer} from '../Reducers/ItemReducer'
import {createStore} from "redux";

export const store = createStore(reducer)