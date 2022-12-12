import App from '@/App'
import Home from '@/pages/home/Home'
import Login from '@/pages/common/Login'
import { createBrowserRouter } from 'react-router-dom'
import Register from '@/pages/common/Register'
import Detail from '@/pages/home/Detail'

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/poem/detail',
    element: <Detail />,
  },
])
