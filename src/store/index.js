import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import web3 from './web3'
import contract from './contract'
import accounts from './accounts'
import services from './services'
import singleService from './singleService'
import users from './users'
import currentUser from './currentUser'
import messages from './messages'


export const reducer = combineReducers({ web3, contract, accounts, services, users, singleService, currentUser, messages })
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './web3'
export * from './contract'
export * from './accounts'
export * from './services'
export * from './singleService'
export * from './users'
export * from './currentUser'
export * from './messages'
