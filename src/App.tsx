import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Signup, ConfirmationEmail, VerifyEmail } from 'pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Sign-up' element={<Signup />} />
        <Route path='/Confirmation-email' element={<ConfirmationEmail />} />
        <Route path='/Verify-email' element={<VerifyEmail />} />
      </Routes>
    </Router>
  )
}

export default App
