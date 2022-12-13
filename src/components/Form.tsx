import { Button, Form, Input, InputNumber } from 'antd'
import {
  FileTextOutlined,
  LockOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons'

const App = ({ type }) => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
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
      className="mt-10"
    >
      {type === 'user' && (
        <>
          <Form.Item label="用户名" name="username">
            <Input
              prefix={<UserOutlined />}
              placeholder="请输入用户名"
            />
          </Form.Item>

          <Form.Item label="密码" name="password">
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item label="是否享有权限" name="isAuth">
            <InputNumber
              min={0}
              max={1}
              prefix={<UserSwitchOutlined />}
              placeholder="是否享有权限，0为否，1为是"
            />
          </Form.Item>
        </>
      )}

      {type === 'poem' && (
        <>
          <Form.Item label="古诗名字" name="pname">
            <Input
              prefix={<UserOutlined />}
              placeholder="请输入古诗名字"
            />
          </Form.Item>

          <Form.Item label="作者" name="author">
            <Input
              prefix={<UserOutlined />}
              placeholder="请输入作者"
            />
          </Form.Item>
          <Form.Item label="作者介绍" name="authorDesc">
            <Input
              prefix={<FileTextOutlined />}
              placeholder="请输入作者介绍"
            />
          </Form.Item>
          <Form.Item label="古诗内容" name="pcontent">
            <Input
              prefix={<FileTextOutlined />}
              placeholder="请输入古诗内容"
            />
          </Form.Item>
          <Form.Item label="古诗介绍" name="pDesc">
            <Input
              prefix={<FileTextOutlined />}
              placeholder="请输入古诗介绍"
            />
          </Form.Item>
          <Form.Item label="诗句鉴赏" name="pAppreciation">
            <Input
              prefix={<FileTextOutlined />}
              placeholder="请输入诗句鉴赏"
            />
          </Form.Item>
        </>
      )}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
