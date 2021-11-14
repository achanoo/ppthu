import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { BaseUrl } from '../helpers/Constant'
import reducer from '../reducers/subscriptionReducers'
import { useAuthContext } from './AuthContext'

let cancelToken

const SubscriptionContext = React.createContext()
const initialStates = {
  subscriptions: [],
  isloading: false,
  categories: [],
}

const SubscriptionProvider = ({ children }) => {
  const { isAuthenticated, token } = useAuthContext()

  const [state, dispatch] = React.useReducer(reducer, initialStates)
  const [level, setLevel] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [image, setImage] = React.useState('')
  const [description, setDescription] = React.useState('')
  // console.log(children)
  React.useEffect(() => {
    getCategories()
    getSubscriptions()
  }, [])

  const getSubscriptions = async () => {
    dispatch({ type: 'SET_LOADING' })
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel('cancel the previous req')
    }
    try {
      cancelToken = axios.CancelToken.source()
      const response = await axios(
        {
          method: 'get',
          url: `${BaseUrl}/subscription-plan`,
          headers: { Authorization: `Bearer ${token}` },
        },
        { cancelToken: cancelToken.token }
      )
      //dispatch({ type: 'UNSET_LOADING' })
      if (response.data.data) {
        const payload = response.data.data
        dispatch({ type: 'DATA_LOADED', payload: payload })
        dispatch({ type: 'UNSET_LOADING' })
      }
    } catch (error) {
      console.log('there is error!')
    }
  }

  const createSubscriptions = async () => {
    const formData = new FormData()
    formData.append('level', level)
    formData.append('price', price)
    formData.append('image', image)
    formData.append('description', description)

    //console.log(formData)

    dispatch({ type: 'SET_LOADING' })
    try {
      const response = await axios({
        method: 'post',
        url: `${BaseUrl}/subscription-plan`,
        data: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.data.data) {
        const payload = response.data.data
        dispatch({ type: 'NEWDATA_LOADED', payload: payload })
        dispatch({ type: 'UNSET_LOADING' })
      }

      // axios
      //   .post(`${BaseUrl}/subscription-plan`, formData, {
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'multipart/form-data',
      //       Authorization: `Bearer ${token}`,
      //     },
      //   })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res)
      //   })
    } catch (error) {
      console.log('there is error!')
    }
  }

  const getCategories = async () => {
    dispatch({ type: 'SET_LOADING' })
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel('cancel the previous req')
    }
    try {
      cancelToken = axios.CancelToken.source()
      const response = await axios(
        {
          method: 'get',
          url: `${BaseUrl}/category`,
          headers: { Authorization: `Bearer ${token}` },
        },
        { cancelToken: cancelToken.token }
      )

      const payload = response.data.categories
      console.log(payload)
      dispatch({ type: 'DATA_LOADED_CATEGORY', payload: payload })
      dispatch({ type: 'UNSET_LOADING' })
    } catch (error) {
      console.log('there is error!')
    }
  }

  React.useEffect(() => {
    console.log('now every smile')
  }, [])

  return (
    <SubscriptionContext.Provider
      value={{
        ...state,
        setLevel,
        setPrice,
        setImage,
        setDescription,
        getSubscriptions,
        createSubscriptions,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}
export const useSubscriptionContext = () => {
  return React.useContext(SubscriptionContext)
}

export { SubscriptionProvider }
