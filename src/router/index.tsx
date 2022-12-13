import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/home/Home'
import Login from '@/pages/common/Login'
import Register from '@/pages/common/Register'
import Detail from '@/pages/home/Detail'
import Table from '@/components/Table'
import {
  UserData,
  UserColumns,
  PoemData,
  PoemColumns,
  CommentData,
  CommentColumns,
} from '@/utils'
import Admin from '@/pages/admin/Admin'
import { Button } from 'antd'

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
        index: true,
        element: <Navigate to="/admin/user" replace />,
      },
      {
        path: 'user',
        element: (
          <>
            <div className="text-right p-3">
              <Button type="primary" size={'middle'}>
                添加用户
              </Button>
            </div>
            <Table data={UserData} columns={UserColumns} />
          </>
        ),
      },
      {
        path: 'poem',
        element: (
          <Table data={PoemData} columns={PoemColumns} />
        ),
      },
      {
        path: 'comment',
        element: (
          <Table
            data={CommentData}
            columns={CommentColumns}
          />
        ),
      },
    ],
  },
])
