import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import History from './components/history/History'

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid p-0">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/history" element={<History />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
