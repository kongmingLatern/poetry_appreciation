import http from '@/api'
import Header from '@/components/Headers'
import AuthorDesc from '@/views/home/AuthorDesc'
import PAppreciation from '@/views/home/PAppreciation'
import PDesc from '@/views/home/PDesc'
import { Tabs } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserComments from '../../views/home/UserComments'

export default function Detail() {
  const [data, setData] = useState<any>({})
  const param = useParams()
  const dataList = [
    {
      label: '作者介绍',
      element: <AuthorDesc data={data} />,
    },
    {
      label: '古诗介绍',
      element: <PDesc data={data} />,
    },
    {
      label: '诗句鉴赏',
      element: <PAppreciation data={data} />,
    },
    {
      label: '用户评论',
      element: <UserComments data={data} />,
    },
  ]
  useEffect(() => {
    async function getData() {
      const res = await http.post('/getPoemByPid', {
        pid: param.pid,
      })
      setData(res.data)
    }
    getData()
  }, [])

  const detail = (
    <div className="detail-container">
      <Header />
      <div className="card bg-white">
        <div className="card_img text-center">
          <h3 className="text-3xl">{data.pname}</h3>
          <p className="text-md">作者：{data.author}</p>
          {data.pcontent &&
            data.pcontent.map(item => (
              <p className="text-5">{item}</p>
            ))}
        </div>
        <Tabs
          defaultActiveKey="1"
          centered
          items={dataList.map((item, i) => {
            const id = String(i + 1)
            return {
              label: item.label,
              key: id,
              children: item.element,
            }
          })}
        />
      </div>
    </div>
  )

  return detail
}
