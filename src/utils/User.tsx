import http from '@/api'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'

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


export async function getData() {
  const res = await http.get('/getAllUser')
  return res.data
}