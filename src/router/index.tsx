import App from '@/App'
import Home from '@/pages/Home'
import { createBrowserRouter } from 'react-router-dom'

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])
