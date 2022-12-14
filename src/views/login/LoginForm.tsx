import http from '@/api'
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, message, Space } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const App: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const uid = localStorage.getItem('uid')
    if (uid) {
      // 自动登录
      navigate('/home')
      message.success('自动登录')
    }
  }, [])
  const onFinish = async (values: any) => {
    if (!values) {
      const res: Record<string, any> = await http.post(
        '/login',
        values
      )
      if (res.code === 200) {
        const { uid, isAuth } = res.data
        localStorage.setItem('uid', uid)
        localStorage.setItem('isAuth', isAuth)
        message.success(res.msg)
        if (isAuth) {
          navigate('/admin')
        } else {
          navigate('/home')
        }
      } else {
        message.error(res.msg)
      }
    } else {
      message.error('请输入用户名和密码')
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="form rounded"
    >
      <h3 className="text-4xl mb-2">登录</h3>
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
