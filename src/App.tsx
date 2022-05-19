import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Signup } from 'pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Sign-up' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
