import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom'
import Home from '@/pages/home/Home'
import Login from '@/pages/common/Login'
import Register from '@/pages/common/Register'
import Detail from '@/pages/home/Detail'
import Table from '@/components/Table'
import {
  getData,
  getPoemData,
  getCommentData,
  UserColumns,
  PoemColumns,
  CommentColumns,
} from '@/utils'
import Admin from '@/pages/admin/Admin'
import Modal from '@/components/Modal'

export default createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
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
    path: '/poem/detail/:pid',
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
              <Modal text={'添加用户'} type={'user'} />
            </div>
            <Table func={getData} columns={UserColumns} />
          </>
        ),
      },
      {
        path: 'poem',
        element: (
          <>
            <div className="text-right p-3">
              <Modal text={'添加诗句'} type={'poem'} />
            </div>
            <Table
              func={getPoemData}
              columns={PoemColumns}
            />
          </>
        ),
      },
      {
        path: 'comment',
        element: (
          <Table
            func={getCommentData}
            columns={CommentColumns}
          />
        ),
      },
    ],
  },
])
