import React, { useState, useEffect } from 'react'
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        poems: [],
        allPoems: [],
        allComments: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getAllPoems()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            poems: [],
            allPoems: []
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

    /*
    function getUserPoems() {
        userAxios.get('/api/poem/user')
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    poems: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    */

    function getAllPoems() {
        userAxios.get('/api/poem')
            .then(res => {
                res.data.sort((a, b) => {
                    return b.points - a.points
                })
                const userPoems = res.data.filter(poem => {
                        if (poem.user === userState.user._id) {
                            return poem
                        }
                    })
                const allPoems = res.data
                userAxios.get('/api/comment')
                    .then(res => {
                        setUserState(prevState => ({
                            ...prevState,
                            allComments: res.data,
                            allPoems: allPoems,
                            poems: userPoems
                        }))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err.response.data.errMsg))
            
    }

    function addPoem(newPoem) {
        userAxios.post("/api/poem", newPoem)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    poems: [...prevState.poems, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    function addComment(newComment) {
        userAxios.post('/api/comment', newComment)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    allComments: [...prevState.allComments, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    function upvote(voterId, poemId) {
        var poem;
        userAxios.get(`/api/poem/indvPoem/${poemId}`)
            .then(res => {
                console.log(res.data)
                poem = res.data[0]
                console.log("poem in upvote: ", poem)

                if (poem.upVoters.indexOf(voterId) !== -1) {
                    var tempArray = poem.upVoters;
                    tempArray.splice(tempArray.indexOf(voterId), 1)
                    poem = {
                        ...poem,
                        upVoters: tempArray,
                        points: poem.points - 1
                    }
                }
                
                else if (poem.downVoters.indexOf(voterId) !== -1) {
                    var tempArray = poem.downVoters;
                    tempArray.splice(tempArray.indexOf(voterId), 1)
                    poem = {
                        ...poem,
                        downVoters: tempArray,
                        upVoters: [...poem.upVoters, voterId],
                        points: poem.points += 2
                    }
                }
                else {
                    poem = {
                        ...poem,
                        upVoters: [...poem.upVoters, voterId],
                        points: poem.points + 1
                    }
                }
                console.log("poem after changes in upvote: ", poem)

                userAxios.put(`/api/poem/indvPoem/${poemId}`, poem)
                    .then(res => {
                        console.log(res)
                        getAllPoems()
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    function downvote(voterId, poemId) {
        var poem;
        userAxios.get(`/api/poem/indvPoem/${poemId}`)
            .then(res => {
                console.log(res.data)
                poem = res.data[0]
                console.log("poem in downvote: ", poem)

                if (poem.downVoters.indexOf(voterId) !== -1) {
                    var tempArray = poem.downVoters;
                    tempArray.splice(tempArray.indexOf(voterId), 1)
                    poem = {
                        ...poem,
                        downVoters: tempArray,
                        points: poem.points + 1
                    }
                }
                
                else if (poem.upVoters.indexOf(voterId) !== -1) {
                    var tempArray = poem.upVoters;
                    tempArray.splice(tempArray.indexOf(voterId), 1)
                    poem = {
                        ...poem,
                        upVoters: tempArray,
                        downVoters: [...poem.downVoters, voterId],
                        points: poem.points -= 2
                    }
                }
                else {
                    poem = {
                        ...poem,
                        downVoters: [...poem.downVoters, voterId],
                        points: poem.points - 1
                    }
                }
                console.log("poem after changes in downvote: ", poem)

                userAxios.put(`/api/poem/indvPoem/${poemId}`, poem)
                    .then(res => {
                        console.log(res)
                        getAllPoems()
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    
    }

    /*
    useEffect(() => {
        getAllPoems()
    }, [])
    */

    return (
        <UserContext.Provider value={{...userState, signup, login, logout, addPoem, addComment, resetAuthErr, getAllPoems, upvote, downvote}}>
            { props.children }
        </UserContext.Provider>
    )
}

//add get all comments