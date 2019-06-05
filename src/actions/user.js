import axios from 'axios'

export const getUsersFetching = () => {
    return {
        type: 'GET_USERS_FETCHING'
    }
}

export const getUsersSuccess = (data) => {
    return {
        type: 'GET_USERS_SUCCESS',
        payload: data
    }
}

export const getUsersFailure = (error) => {
    return {
        type: 'GET_USERS_FAILURE',
        payload: error
    }
}

export const getUsers = () => async (dispatch) => {
    try {
        dispatch(getUsersFetching())
        const data = await axios.get('http://localhost:3001/users')
        await dispatch(getUsersSuccess(data.data))
    } catch (e) {
        dispatch(getUsersFailure(e))
        console.log('Error', e)
    }
}

export const getUserFetching = () => {
    return {
        type: 'GET_USER_FETCHING'
    }
}

export const getUserSuccess = (data) => {
    return {
        type: 'GET_USER_SUCCESS',
        payload: data
    }
}

export const getUserFailure = (error) => {
    return {
        type: 'GET_USER_FAILURE',
        payload: error
    }
}

export const getUser = (id) => async (dispatch) => {
    try {
        dispatch(getUserFetching())
        const data = await axios.get(`http://localhost:3001/editar/${id}`)
        await dispatch(getUserSuccess(data.data))
    } catch (e) {
        dispatch(getUserFailure(e))
        console.log('Error', e)
    }
}

export const deleteUserFetching = () => {
    return {
        type: 'GET_DELETE_FETCHING'
    }
}

export const deleteUserSuccess = () => {
    return {
        type: 'GET_DELETE_SUCCESS'
    }
}

export const deleteUserFailure = (error) => {
    return {
        type: 'GET_DELETE_FAILURE',
        payload: error
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch(deleteUserFetching())
        const data = await axios.get(`http://localhost:3001/excluir/${id}`)
        await dispatch(deleteUserSuccess(data.data))
        dispatch(changeStatusTrue())
    } catch (e) {
        dispatch(deleteUserFailure(e))
        console.log('Error', e)
    }
}

export const changeStatusTrue = () => {
    return {
        type: 'DELETE_USER_UPDATE',
        payload: true
    }
}

export const changeStatusFalse = () => {
    return {
        type: 'DELETE_USER_UPDATE',
        payload: false
    }
}