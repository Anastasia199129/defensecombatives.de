
export const fetchUsers = () => {
return async (dispatch:any) => {
  try {
    dispatch({type: 'FETSH_USERS'})
    // const respobce
  } catch (error) {
    dispatch({type: 'FETSH_USERS_ERROR', payload: 'error'})

  }
}
}

