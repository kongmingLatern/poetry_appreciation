import http from '@/api'
import { message } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface UserType {
  uid: string
  key: string
  username: string
  password: string
  isAuth: number
}

async function remove(type: string, id: string) {
  let res
  switch (type) {
    case 'comment':
      res = await http.delete('/deleteComment', {
        params: {
          cid: id,
        },
      })
      break
    case 'poem':
      res = await http.delete('/deletePoem', {
        params: {
          pid: id,
        },
      })
      break
    case 'user':
      res = await http.delete('/deleteUser', {
        params: {
          uid: id,
        },
      })
  }
  if (res.code === 200) {
    message.success(res.msg)
  } else {
    message.error(res.msg)
  }
}

export const columns: ColumnsType<UserType> = [
  {
    title: '编号',
    dataIndex: 'no',
    key: 'no',
    render: (_, __, index) => index + 1,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: '权限',
    dataIndex: 'isAuth',
    key: 'isAuth',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <a onClick={() => remove('user', record.uid)}>
        Delete
      </a>
    ),
  },
]

export async function getData() {
  const res = await http.get('/getAllUser')
  return res.data
}
