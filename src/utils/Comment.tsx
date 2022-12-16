import http from '@/api'
import { ColumnsType } from 'antd/es/table'
import { remove } from './User'

interface CommentType {
  key?: string
  cid: string
  pname: string
  username: string
  comment: string
  commentTime: string
  commentLike?: string
  isViolation?: number
}

export const columns: ColumnsType<CommentType> = [
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
    title: '评论内容',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: '评论用户',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '评论时间',
    dataIndex: 'commentTime',
    key: 'commentTime',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <a onClick={() => remove('comment', record.cid)}>
        删除
      </a>
    ),
  },
]

export async function getCommentData() {
  const res = await http.get('/getAllComment')
  return res.data
}
