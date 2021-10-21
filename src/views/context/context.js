import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

const formData = {
  email: 'admin@gmail.com',
  password: 'admin',
  role: '1',
}

const AppContextProvider = ({ children }) => {
  const [bearToken, setBearToken] = useState('')
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  )
  useEffect(() => {
    fetch('http://localhost:8000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.data
        if (data.status === 'Active') {
          setBearToken(data.access_token)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  //for login with google

  const responseGoogle = (res) => {
    const googleresponse = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      image: res.profileObj.imageUrl,
      provider: 'Google',
    }
    console.log(googleresponse)
    fetch('http://localhost:8000/api/v1/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(googleresponse),
    })
      .then((res) => res.json())
      .then(
        (res) =>
          new Promise(function () {
            const data = res.data
            if (data.status === 'Active') {
              setUser(data)
              localStorage.setItem('user', JSON.stringify(data))
            }
          })
      )
    // store returned user somehow
  }

  //for login with account
  const login = (formData) => {
    fetch('http://localhost:8000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data
        if (data.status === 'Active') {
          setUser(data)
          localStorage.setItem('user', JSON.stringify(data))
        }
      })
      .catch((err) => console.log(err))
  }

  //google login

  //logout

  const logout = () => {
    localStorage.removeItem('user')
    setUser({})
    // history.push('/')
    // window.location.reload()
  }

  return (
    <AppContext.Provider value={{ user, login, responseGoogle, logout }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppContext, AppContextProvider }
