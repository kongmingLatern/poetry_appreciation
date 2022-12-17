import { UserOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const exit = () => {
    localStorage.clear()
    window.location.href = '/login'
  }
  return (
    <div className="relative">
      <h3 className="text-center h-15 lh-15 img text-4xl">
        诗词鉴赏
      </h3>
      <div className="absolute right-0 top-5 text-lg flex items-center">
        <UserOutlined className="color-red" />
        <Space>
          <span className="color-black ml-2 font-bold ">
            {localStorage.getItem('uid')
              ? localStorage.getItem('isAuth')
                ? '管理员'
                : '会员'
              : '游客'}
          </span>
          <div>
            {localStorage.getItem('uid') ? (
              <Button onClick={() => exit()} danger>
                退出登录
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/register')}
                type={'primary'}
              >
                注册会员
              </Button>
            )}
          </div>
        </Space>
      </div>
    </div>
  )
}
