import { UserOutlined } from '@ant-design/icons'
import { Button, List, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

export default function LeftAside() {
  const navigate = useNavigate()
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
          renderItem={(item, index) => (
            <List.Item>
              <Link to={'/login'} className="truncate">
                <span className="mr-2">{index + 1}.</span>
                {item}
              </Link>
            </List.Item>
          )}
        />
      </main>
    </div>
  )
}
