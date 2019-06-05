const INITIAL_STATE = {
    users: [],
    user: [],
    loading: false,
    status: false,
    error: ''
}

export const getUsers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_USERS_FETCHING':
            return {
                ...state,
                error: null,
                loading: true
            }
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'GET_USERS_FAILURE':
            return {
                ...state,
                users: [],
                error: action.payload,
                loading: false,
            }
        case 'DELETE_USER_UPDATE':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}

export const getUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_USER_FETCHING':
            return {
                ...state,
                error: null,
                loading: true
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_USER_FAILURE':
            return {
                ...state,
                user: [],
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const deleteUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DELETE_USER_FETCHING':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                status: true
            }
        case 'DELETE_USER_FAILURE':
            return {
                ...state,
                error: action.payload,
                loading: false,
                status: false
            }
        default:
            return state
    }
}