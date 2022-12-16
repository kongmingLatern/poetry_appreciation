import http from '@/api'
import Change from '@/components/Change'
import { ColumnsType } from 'antd/es/table'

interface PoemType {
  pid: string
  pname: string
  author: string
  authorDesc: string
  pcontent: string
  pDesc: string
  pAppreciation: string
  key?: string
}

export const columns: ColumnsType<PoemType> = [
  {
    title: '编号',
    dataIndex: 'no',
    key: 'no',
    render: (_, __, index) => index + 1,
  },
  {
    title: '古诗名字',
    dataIndex: 'pname',
    key: 'pname',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '作者介绍',
    key: 'authorDesc',
    dataIndex: 'authorDesc',
  },
  {
    title: '古诗内容',
    key: 'pcontent',
    dataIndex: 'pcontent',
  },

  {
    title: '古诗介绍',
    key: 'pDesc',
    dataIndex: 'pDesc',
  },
  {
    title: '古诗鉴赏',
    key: 'pAppreciation',
    dataIndex: 'pAppreciation',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Change
        text={'修改信息'}
        type="poem"
        id={record.pid}
      />
    ),
  },
]

export async function getPoemData() {
  const res = await http.get('/getAllPoem')
  return res.data
}
