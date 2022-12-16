import http from '@/api'
import { Button, Card } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchInput from './SearchInput'

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

  return (
    <>
      <SearchInput />
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-2">
        {data.map((item, key) => {
          return (
            <Card
              hoverable
              key={key}
              cover={
                <div className="text-center pt-5">
                  <h3 className="text-3xl">{item.pname}</h3>
                  <p className="text-md">
                    作者：{item.author}
                  </p>
                  {/* 诗句 */}
                  {item.pcontent.map(item => (
                    <p className="text-5">{item}</p>
                  ))}
                  <Button className="w-50 " type="primary">
                    查看详情
                  </Button>
                </div>
              }
              onClick={() =>
                navigate('/poem/detail/' + item.pid)
              }
            ></Card>
          )
        })}
      </div>
    </>
  )
}
