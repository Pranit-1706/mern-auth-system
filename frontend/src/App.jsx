import './App.css'
import { Routes, Route , Navigate} from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path='/login' element={<Login></Login>} />
      <Route path='/signup' element={<Signup></Signup>} />
      <Route path='/home' element={<PrivateRoute></PrivateRoute>}>
        <Route path='/home' element={<HomePage></HomePage>} />
      </Route>
      <Route path='*' element={<NotFound></NotFound>} />
    </Routes>
  </>
}

export default App
