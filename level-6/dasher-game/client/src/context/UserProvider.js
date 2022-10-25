import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    highScore: JSON.parse(localStorage.getItem("dasherHighScore")) || [], 
    tempScore: null,
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        const highScore = userState.highScore
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("dasherHighScore", JSON.stringify(userState.highScore))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token,
          highScore
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        const highScore = userState.highScore
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        
        getUserScore()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token,
          highScore
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("dasherHighScore")
    setUserState({
      user: {},
      token: "",
      highScore: {}
    })
  }

  function handleAuthErr(errMsg) {
    setUserState(prevState => ({
      ...prevState,
      errMsg 
    }))
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  function getUserScore(){
    userAxios.get("/api/scores/user")
      .then(res => {
        localStorage.setItem("dasherHighScore", JSON.stringify(res.data))
        setUserState(prevState => ({
          ...prevState,
          highScore: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addScoreWithPrevScore(score /*, highScore*/){
      getUserScore()
      userAxios.get("/api/scores/user")
      .then(res => {
        console.log("Went into the get score route")
        console.log("get route Res.data[0].score: " + res.data[0].score)
        console.log("score.score: " + score.score)
        if (res.data[0].score < score.score) {
          console.log("went into the check for res.score < tempScore")
          userAxios.delete(`/api/scores/${res.data[0]._id}`)
            .then(res => {
                console.log("Went into delete route")
                console.log("Delete res:" + res)
                userAxios.post("/api/scores", score)
                  .then(res => {
                    console.log("went into posting score route")
                    setUserState(prevState => ({
                      ...prevState,
                      highScore: res.data
                    }))
                    getUserScore()
                  })
                  .catch(err => console.log(err.response.data.errMsg))
            })
            .catch(err => console.log(err.response.data.errMsg))
        }
      })
      .catch(err => console.log(err.response.data.errMsg))
    
      
  }

  function addScore(score) {
      //localStorage.setItem("dasherHighScore", JSON.stringify(score))
      userAxios.post("/api/scores", score)
        .then(res => {
          console.log("posting first time score from addScore")
          setUserState(prevState => ({
            ...prevState,
            highScore: res.data
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
      getUserScore()
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        setUserState,
        signup,
        login,
        logout,
        addScore,
        addScoreWithPrevScore,
        resetAuthErr
      }}>
      { props.children }
    </UserContext.Provider>
  )
}