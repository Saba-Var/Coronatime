import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import {
  Login,
  Signup,
  ConfirmationEmail,
  VerifyEmail,
  ConfirmedEmail,
  Dashboard,
} from 'pages'

const App = () => {
  const [user, setUser] = useState<string>('')

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/Sign-up' element={<Signup />} />
        <Route path='/Confirmation-email' element={<ConfirmationEmail />} />
        <Route path='/Verify-email' element={<VerifyEmail />} />
        <Route path='/Confirmed-email' element={<ConfirmedEmail />} />
        <Route path='/Dashboard' element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  )
}

export default App
