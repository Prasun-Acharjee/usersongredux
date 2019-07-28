import {createStore} from "redux";
import {allreducer} from "./reducers/index";
export const createmystore=()=>createStore(allreducer);