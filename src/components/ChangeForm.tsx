import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Space,
} from 'antd'
import {
  FileTextOutlined,
  LockOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons'
import http from '@/api'
import { useEffect, useState } from 'react'

const App = ({ type, isShow, id }) => {
  const onFinish = async (values: any) => {
    console.log(values)

    let res
    if (type === 'user') {
      res = await http.put('/updateUser', {
        ...values,
        uid: id,
      })
    } else if (type === 'poem') {
      res = await http.put('/updatePoem', {
        ...values,
        pid: id,
        pcontent: [values.pcontent],
      })
    }
    if (res.code === 200) {
      message.success(res.msg)
    } else {
      message.error(res.msg)
    }
    window.location.reload()
    isShow()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const [data, setData] = useState<any>({})

  useEffect(() => {
    async function getData() {
      let res
      if (type === 'user') {
        res = await http.post('/getUserByUid', {
          pid: id,
        })
      } else if (type === 'poem') {
        res = await http.post('/getPoemByPid', {
          pid: id,
        })
      }
      setData(res.data)
    }
    getData()
  }, [])

  console.log(data)

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
              value={data.username}
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            initialValue={data.password}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="请输入密码"
              value={data.password}
            />
          </Form.Item>
          <Form.Item label="是否享有权限" name="isAuth">
            <InputNumber
              min={0}
              max={1}
              prefix={<UserSwitchOutlined />}
              placeholder="是否享有权限，0为否，1为是"
              value={data.isAuth}
            />
          </Form.Item>
        </>
      )}

      {type === 'poem' && (
        <>
          <Form.Item
            label="古诗名字"
            name="pname"
            initialValue={data.pname}
          >
            <Input
              value={data.pname}
              prefix={<UserOutlined />}
              placeholder="请输入古诗名字"
            />
          </Form.Item>

          <Form.Item
            label="作者"
            name="author"
            initialValue={data.author}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="请输入作者"
              value={data.author}
            />
          </Form.Item>
          <Form.Item
            label="作者介绍"
            name="authorDesc"
            initialValue={data.authorDesc}
          >
            <Input
              prefix={<FileTextOutlined />}
              placeholder="请输入作者介绍"
              value={data.authorDesc}
            />
          </Form.Item>
          <Form.Item
            label="古诗内容"
            name="pcontent"
            initialValue={data.pContent}
          >
            <Input
              prefix={<FileTextOutlined />}
              placeholder="请输入古诗内容"
              value={data.pContent}
            />
          </Form.Item>
          <Form.Item
            label="古诗介绍"
            name="pDesc"
            initialValue={data.pDesc}
          >
            <Input
              prefix={<FileTextOutlined />}
              placeholder="请输入古诗介绍"
              value={data.pDesc}
            />
          </Form.Item>
          <Form.Item
            label="诗句鉴赏"
            name="pAppreciation"
            initialValue={data.pAppreciation}
          >
            <Input
              prefix={<FileTextOutlined />}
              placeholder="请输入诗句鉴赏"
              value={data.pAppreciation}
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
