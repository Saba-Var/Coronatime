import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import {
  PasswordConfirmation,
  RecoveryPasswordByEmail,
  ConfirmationEmail,
  ConfirmedEmail,
  NewPassword,
  Dashboard,
  Worldwide,
  Country,
  SignUp,
  LogIn,
} from 'pages'

const App = () => {
  const [user, setUser] = useState<string>('')
  const [language, setLanguage] = useState<string>('en')

  return (
    <Router>
      <Routes>
        <Route path='Sign-up' element={<SignUp />} />
        <Route path='/' element={<LogIn setUser={setUser} />} />
        <Route path='Verify-password' element={<NewPassword />} />
        <Route path='Confirmation-email' element={<ConfirmationEmail />} />
        <Route
          path='Password-confirmation'
          element={<PasswordConfirmation />}
        />
        <Route path='Confirmed-email' element={<ConfirmedEmail />} />
        <Route
          path='Dashboard'
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
          path='Recovery-Password-email'
          element={<RecoveryPasswordByEmail />}
        />
      </Routes>
    </Router>
  )
}

export default App
