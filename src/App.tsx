import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import {
  RecoveryPassword1,
  ConfirmationEmail,
  ConfirmedEmail,
  VerifyEmail,
  Dashboard,
  Worldwide,
  Country,
  Signup,
  Login,
} from 'pages'

const App = () => {
  const [user, setUser] = useState<string>('')
  const [language, setLanguage] = useState<string>('en')

  return (
    <Router>
      <Routes>
        <Route path='/Sign-up' element={<Signup />} />
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/Verify-email' element={<VerifyEmail />} />
        <Route path='/Confirmation-email' element={<ConfirmationEmail />} />
        <Route path='/Confirmed-email' element={<ConfirmedEmail />} />
        <Route
          path='/Dashboard'
          element={
            <Dashboard
              user={user}
              language={language}
              setLanguage={setLanguage}
            />
          }
        >
          <Route path='Worldwide' element={<Worldwide />} />
          <Route path='By-country' element={<Country />} />
        </Route>
        <Route
          path='/Recovery-Password-email'
          element={<RecoveryPassword1 />}
        />
      </Routes>
    </Router>
  )
}

export default App
