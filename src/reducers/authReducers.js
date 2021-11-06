const auth_reducers = (state, action) => {
  if (action.type === 'IS_AUTHENTICATED') {
    if (state.token) {
      return { ...state, isAuthenticated: true }
    } else {
      return { ...state, isAuthenticated: false }
    }
  }
  if (action.type === 'GET_ADMIN_BEAR_TOKEN') {
    return { ...state, bearToken: 'heo' }
  }

  if (action.type === 'LOGIN_SUCCESS') {
    const { access_token: token } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      token: token,
      user: action.payload,
    }
  }

  if (action.type === 'LOGOUT_ACTION') {
    return { ...state, isAuthenticated: false, user: {}, token: '' }
  }
  // return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default auth_reducers
