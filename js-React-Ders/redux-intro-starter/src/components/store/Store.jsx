import {legacy_createstore as createStore} from "redux"
import { counterReducer } from "./counterReducer"


export const store=createStore(counterReducer)
