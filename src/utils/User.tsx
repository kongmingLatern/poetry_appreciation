import http from '@/api'
import Change from '@/components/Change'
import { message } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { remove } from '.'

interface UserType {
  uid: string
  key: string
  username: string
  password: string
  isAuth: number
}

export const columns: ColumnsType<UserType> = [
  {
    title: '编号',
    dataIndex: 'no',
    key: 'no',
    render: (_, __, index) => index + 1,
    ellipsis: true
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    ellipsis: true
  },
  {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
    ellipsis: true
  },
  {
    title: '权限',
    dataIndex: 'isAuth',
    key: 'isAuth',
    ellipsis: true
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Change
        text={'修改信息'}
        type="user"
        id={record.uid}
      />
    ),
  },
]

export async function getData() {
  const res = await http.get('/getAllUser')
  return res.data
}
