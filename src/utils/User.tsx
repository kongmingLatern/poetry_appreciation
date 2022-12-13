import { ColumnsType } from 'antd/es/table'

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
      <a
        onClick={() => {
          console.log(record.uid)
        }}
      >
        Delete
      </a>
    ),
  },
]

export const data: UserType[] = [
  {
    uid: '1',
    key: '1',
    username: 'John Brown',
    password: '123123',
    isAuth: 0,
  },
  {
    uid: '2',
    key: '2',
    username: 'John Brown123123',
    password: '123123r34',
    isAuth: 0,
  },
  {
    uid: '3',
    key: '3',
    username: 'John Brown12313',
    password: '12312qweqwe3',
    isAuth: 1,
  },
]
