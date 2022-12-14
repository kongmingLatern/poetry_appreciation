import http from '@/api'
import Header from '@/components/Headers'
import List from '@/views/detail/List'
import { Divider } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Detail() {
  const [data, setData] = useState<any>({})
  const param = useParams()
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
        <Divider className="bg-white h-10 lh-10 text-2xl">
          作者介绍
        </Divider>
        <p className="text-xl p-5">{data.authorDesc}</p>
        <Divider className="bg-white h-10 lh-10 text-2xl">
          古诗介绍
        </Divider>

        <p className="text-xl p-5">{data.pDesc}</p>
        <Divider className="bg-white h-10 lh-10 text-2xl">
          诗句鉴赏
        </Divider>
        <p className="text-xl p-5">{data.pAppreciation}</p>
        <Divider className="bg-white h-10 lh-10 text-2xl">
          用户评论
        </Divider>
        <List comments={data.comments} pid={data.pid} />
      </div>
    </div>
  )

  return detail
}
