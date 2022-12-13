import http from '@/api'
import { Button, Card } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Meta } = Card

export default function Cards(): any {
  const [data, setData] = useState<any>([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      const res = await http.get('/getAllPoem')
      setData(res.data)
    }
    getData()
  }, [])

  return data.map((item, key) => {
    return (
      <Card
        hoverable
        className="mx-5 my-5 flex items-center justify-center pl-5 theme_font"
        key={key}
        cover={
          <div className="text-center pt-5">
            <h3 className="text-3xl">{item.pname}</h3>
            <p className="text-md">作者：{item.author}</p>
            {/* 诗句 */}
            {item.pcontent.map(item => (
              <p className="text-5">{item}</p>
            ))}
            <Button className="w-50 mb-5" type="primary">
              评论
            </Button>
          </div>
        }
        onClick={() => navigate('/poem/detail/' + item.pid)}
      >
        <Meta title="古诗介绍" description={item.pDesc} />
        <Meta
          title="作者介绍"
          description={item.authorDesc}
          className="mt-2"
        />
        <Meta
          title="诗句鉴赏"
          description={item.pAppreciation}
          className="mt-2"
        />
      </Card>
    )
  })
}
