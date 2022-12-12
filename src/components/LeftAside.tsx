import { UserOutlined } from '@ant-design/icons'
import { Button, List } from 'antd'
import { Link } from 'react-router-dom'
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]
export default function LeftAside() {
  return (
    <div className="w-50">
      <header className="flex justify-around items-center bg-green-500 h-15 rounded">
        <div className="text-lg">
          <UserOutlined className="color-white " />
          <span className="color-white ml-2">用户名</span>
        </div>
        <div>
          <Button>退出登录</Button>
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
            <List.Item className="bg-white">
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
