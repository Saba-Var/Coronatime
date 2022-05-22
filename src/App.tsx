import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import {
  Login,
  Signup,
  ConfirmationEmail,
  VerifyEmail,
  ConfirmedEmail,
  Dashboard,
  Worldwide,
} from 'pages'

const App = () => {
  const [token, setToken] = useState<string>('')
  const [user, setUser] = useState<string>('')

  return (
    <Router>
      <Routes>
        <Route path='/Sign-up' element={<Signup />} />
        <Route
          path='/'
          element={<Login setUser={setUser} setToken={setToken} />}
        />
        <Route path='/Verify-email' element={<VerifyEmail />} />
        <Route path='/Confirmation-email' element={<ConfirmationEmail />} />
        <Route path='/Confirmed-email' element={<ConfirmedEmail />} />
        <Route
          path='/Dashboard'
          element={<Dashboard user={user} token={token} setToken={setToken} />}
        >
          <Route path='Worldwide' element={<Worldwide />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
