import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const navigate = useNavigate()

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="form rounded"
    >
      <h3 className="text-2xl">登录</h3>
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

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item>
        <div className="w-100 text-center">
          <Space direction="vertical" size={'large'}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-80 bg-green-500"
              onClick={() => navigate('/register')}
            >
              注册
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="w-80"
            >
              登录
            </Button>
          </Space>
        </div>
      </Form.Item>
    </Form>
  )
}

export default App
