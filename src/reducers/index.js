import { combineReducers } from 'redux'
import { getUsers, getUser, deleteUser } from './user'

export const reducers = combineReducers({
    getUsers,
    getUser,
    deleteUser
})