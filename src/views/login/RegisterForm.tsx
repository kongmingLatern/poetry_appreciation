import http from '@/api'
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, message, Space } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const App: React.FC = () => {
  const navigate = useNavigate()
  const onFinish = async (values: any) => {
    if (values) {
      const res: Record<string, any> = await http.post(
        'register',
        values
      )
      if (res.code === 200) {
        message.success('注册成功')
        navigate('/login')
      } else {
        message.error(res.msg)
      }
    } else {
      message.error('用户名和密码不能为空')
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="form rounded"
    >
      <h3 className="text-2xl mb-2">注册</h3>
      <Form.Item name="username">
        <Input
          prefix={<UserOutlined className="text-xl mr-2" />}
          placeholder="请输入用户名"
        />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password
          prefix={<LockOutlined className="text-xl mr-2" />}
          placeholder="请输入密码"
        />
      </Form.Item>

      <Form.Item>
        <div className="w-100 text-center">
          <Space direction="vertical" size={'large'}>
            <div className="text-right">
              已有账号？去
              <Link to={'/login'}>登录</Link>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="w-80"
            >
              注册
            </Button>
          </Space>
        </div>
      </Form.Item>
    </Form>
  )
}

export default App
