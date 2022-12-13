import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/home/Home'
import Login from '@/pages/common/Login'
import Register from '@/pages/common/Register'
import Detail from '@/pages/home/Detail'
import Admin from '@/pages/admin/Admin'
import Table from '@/components/Table'
import {
  data as UserData,
  columns as UserColumns,
} from '@/views/admin/User'

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
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'user',
        element: (
          <Table data={UserData} columns={UserColumns} />
        ),
      },
      {
        path: 'poem',
        element: (
          <Table data={UserData} columns={UserColumns} />
        ),
      },
      {
        path: 'comment',
        element: (
          <Table data={UserData} columns={UserColumns} />
        ),
      },
    ],
  },
])
