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
      <a
        onClick={() => {
          console.log(record.pid)
        }}
      >
        Delete
      </a>
    ),
  },
]

export const data: PoemType[] = [
  {
    key: '1',
    pid: '1',
    pname: '绝句',
    author: '李白',
    authorDesc: '按实际吊索具ioa',
    pcontent: '按实际吊索具ioa',
    pDesc: '按实际吊索具ioa',
    pAppreciation: '按实际吊索具ioa',
  },
  {
    key: '2',
    pid: '2',
    pname: '绝句',
    author: '李白',
    authorDesc: '按实际吊索具ioa',
    pcontent: '按实际吊索具ioa',
    pDesc: '按实际吊索具ioa',
    pAppreciation: '按实际吊索具ioa',
  },
  {
    key: '3',
    pid: '3',
    pname: '绝句',
    author: '李白',
    authorDesc: '按实际吊索具ioa',
    pcontent: '按实际吊索具ioa',
    pDesc: '按实际吊索具ioa',
    pAppreciation: '按实际吊索具ioa',
  },
]
