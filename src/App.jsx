
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from "./pages/Layout"
import Homepage from "./pages/Homepage"
import Searchpage from './pages/Searchpage'
import AuthForm from './pages/AuthForm'
import Errorpage from './pages/Errorpage'
import User from "./components/User"
import CanvaPage from './pages/CanvaPage'
import InfoPage from './pages/InfoPage'
import { getUser } from './auth'
// import { getCurrentUser } from './auth'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from './firebase'

const AuthContext = React.createContext("null")

function App() {
  // const authUser = getCurrentUser()

  const [user, setUser] = React.useState(null)

  return (
    <>
    <AuthContext.Provider value={{user, setUser}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="search" element={<Searchpage/>}/>
        <Route path="canva" element={<CanvaPage/>}/>
        <Route path="info" element={<InfoPage/>}/>
        <Route path="user/:uid" element={<User/>}/>
        <Route path="authentification" element={!user ? <AuthForm/> : <Navigate to={`/user/${user.uid}`} />}/>
        <Route path="*" element={<Errorpage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    </>
  )
}

export default App
export { AuthContext }
