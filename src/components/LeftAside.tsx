import http from '@/api'
import { UserOutlined } from '@ant-design/icons'
import { Button, List, message } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LeftAside() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await http.get('/getAllNews')
      setData(res.data)
    }
    getData()
  }, [])
  console.log(data)
  function exit() {
    localStorage.clear()
    setTimeout(() => {
      navigate('/login')
      message.success('退出成功')
    }, 500)
  }
  return (
    <div className="w-50 fixed bg-white">
      <header className="flex justify-around items-center bg-green-500 h-15 rounded">
        <div className="text-lg">
          <UserOutlined className="color-white" />
          <span className="color-white ml-2 font-bold ">
            {localStorage.getItem('uid') ? '会员' : '游客'}
          </span>
        </div>
        <div>
          {localStorage.getItem('uid') ? (
            <Button onClick={() => exit()}>退出登录</Button>
          ) : (
            <Button onClick={() => navigate('/register')}>
              注册会员
            </Button>
          )}
        </div>
      </header>

      <main>
        <List
          header={
            <div className="text-center font-bold text-lg">
              知识扩展
            </div>
          }
          bordered
          dataSource={data}
          renderItem={(item: any, index) => (
            <List.Item>
              <span className="truncate">
                <span className="mr-2">{index + 1}.</span>
                {item.newsName}
              </span>
            </List.Item>
          )}
        />
      </main>
    </div>
  )
}
