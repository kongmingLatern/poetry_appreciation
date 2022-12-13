import { Tag, Space } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface CommentType {
  key: string
  no: string
  pname: string
  comment: string
  commentUser: string
  commentTime: string
  commentLike: string
  isViolation: number
}

export const columns: ColumnsType<CommentType> = [
  {
    title: '编号',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: '古诗名字',
    dataIndex: 'pname',
    key: 'pname',
  },
  {
    title: '评论',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: '评论用户',
    dataIndex: 'commentUser',
    key: 'commentUser',
  },
  {
    title: '评论时间',
    dataIndex: 'commentTime',
    key: 'commentTime',
  },
  {
    title: '评论点赞数',
    dataIndex: 'commentLike',
    key: 'commentLike',
  },
  {
    title: '是否违规',
    dataIndex: 'isViolation',
    key: 'isViolation',
    render: text => (text === 0 ? '违规' : '合法'),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => <a>删除</a>,
  },
]

export const data: CommentType[] = [
  {
    key: '1',
    no: '1',
    pname: '绝句',
    comment: '加上大家爱哦是jio',
    commentTime: '2021-05-01 12:00:00',
    commentUser: '陈楷豪',
    commentLike: '100',
    isViolation: 0,
  },
  {
    key: '2',
    no: '2',
    pname: '绝句',
    comment: '加上大家爱哦是jio',
    commentTime: '2021-05-01 12:00:11',
    commentUser: '陈楷豪',
    commentLike: '122',
    isViolation: 1,
  },
  {
    key: '3',
    no: '3',
    pname: '绝句',
    comment: '加上大家爱哦是',
    commentTime: '2021-05-01 12:00:21',
    commentUser: '陈楷豪',
    commentLike: '131',
    isViolation: 0,
  },
]
