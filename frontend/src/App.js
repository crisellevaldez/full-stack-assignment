import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav-bar/Nav'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={ <Dashboard /> }>

            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
