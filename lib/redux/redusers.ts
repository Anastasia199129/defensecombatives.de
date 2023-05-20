import {combineReducers} from 'redux'

const initialState = {
  usres: [],
  loading: false,
  error: null,
}

const FETSH_USERS = 'FETSH_USERS'
const FETSH_USERS_SUCCESS = 'FETSH_USERS_SUCCESS'
const FETSH_USERS_ERROR = 'FETSH_USERS_ERROR'

export const userReduser = (state = initialState, action:{type: string, payload?: any}) => {
  switch (action.type) {
    case FETSH_USERS:
      return { loading: true, error: null, users: [] }

    case FETSH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload }
    case FETSH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] }
    default:
      return state
  }
}

export const rootReduser = combineReducers({
  user: userReduser,
})
