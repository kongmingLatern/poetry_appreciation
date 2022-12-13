import { Space } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface DataType {
  no: number
  key: string
  username: string
  password: string
  isAuth: number
}

export const columns: ColumnsType<DataType> = [
  {
    title: '编号',
    dataIndex: 'no',
    key: 'no',
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
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
]

export const data: DataType[] = [
  {
    no: 1,
    key: '1',
    username: 'John Brown',
    password: '123123',
    isAuth: 0,
  },
  {
    no: 2,
    key: '2',
    username: 'John Brown123123',
    password: '123123r34',
    isAuth: 0,
  },
  {
    no: 3,
    key: '3',
    username: 'John Brown12313',
    password: '12312qweqwe3',
    isAuth: 1,
  },
]
