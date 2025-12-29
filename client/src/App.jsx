import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import {Toaster} from 'react-hot-toast'

const App = () => {

  const dispatch = useDispatch()

  // const getUserData = async () => {
  //   const token = localStorage.getItem('token')
  //   try {
  //     if(token){
  //       const { data } = await api.get('/api/users/data', {headers: {Authorization: token}})
  //       if(data.user){
  //         dispatch(login({token, user: data.user}))
  //       }
  //       dispatch(setLoading(false))
  //     }else{
  //       dispatch(setLoading(false))
  //     }
  //   } catch (error) {
  //     dispatch(setLoading(false))
  //     console.log(error.message)
  //   }
  // }

  // useEffect(()=>{
  //   getUserData()
  // },[])

 useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        dispatch(setLoading(false))
        return
      }

      try {
        const { data } = await api.get('/api/users/data')
        dispatch(login({ token, user: data.user }))
      } catch (err) {
        localStorage.removeItem('token')
      } finally {
        dispatch(setLoading(false))
      }
    }

    loadUser()
  }, [])

  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/builder/:id" element={<ResumeBuilder />} />
          <Route path="/app/preview/:id" element={<Preview />} />
        </Route>
      </Routes>
    </>
  )
}

export default App


  return (
    <>
    <Toaster />
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='builder/:resumeId' element={<ResumeBuilder />}/>
        </Route>

        <Route path='view/:resumeId' element={<Preview />}/>
        <Route path ='login' element={<Login/>}/>

       
      </Routes>
    </>
  )
}

export default App
