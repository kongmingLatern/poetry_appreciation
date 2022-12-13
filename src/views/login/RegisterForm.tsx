import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

const App: React.FC = () => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Success:', values)
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
            <Button
              type="primary"
              htmlType="submit"
              className="w-80 bg-green-500"
              onClick={() => navigate('/login')}
            >
              登录
            </Button>
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
