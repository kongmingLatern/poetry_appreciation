import {
  CommentOutlined,
  FileTextOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu, Space } from 'antd'
import { Link } from 'react-router-dom'

export default function Sider() {
  return (
    <Menu
      className="h-100vh"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['user']}
    >
      <Menu.Item key={'user'}>
        <Space>
          <UserOutlined />
          <Link to={'/admin/user'}>用户管理</Link>
        </Space>
      </Menu.Item>
      <Menu.Item key={'poem'}>
        <Space>
          <FileTextOutlined />
          <Link to={'/admin/poem'}>诗词管理</Link>
        </Space>
      </Menu.Item>
      <Menu.Item key={'comment'}>
        <Space>
          <CommentOutlined />
          <Link to={'/admin/comment'}>评论管理</Link>
        </Space>
      </Menu.Item>
    </Menu>
  )
}
