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
  Country,
} from 'pages'

const App = () => {
  const [user, setUser] = useState<string>('')

  return (
    <Router>
      <Routes>
        <Route path='/Sign-up' element={<Signup />} />
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/Verify-email' element={<VerifyEmail />} />
        <Route path='/Confirmation-email' element={<ConfirmationEmail />} />
        <Route path='/Confirmed-email' element={<ConfirmedEmail />} />
        <Route path='/Dashboard' element={<Dashboard user={user} />}>
          <Route path='Worldwide' element={<Worldwide />} />
          <Route path='By-country' element={<Country />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
