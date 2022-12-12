import { Avatar, Button, Input, List, Space } from 'antd'
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from '@ant-design/icons'
import React from 'react'
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]
const IconText = ({
  icon,
  text,
}: {
  icon: React.FC
  text: string
}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const { TextArea } = Input
const onChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>
) => {
  console.log('Change:', e.target.value)
}
const App: React.FC = () => (
  <>
    <div className="text-right pr-5 w-100 mx-auto">
      <TextArea
        className="w-100"
        showCount
        maxLength={100}
        placeholder="输入评论"
      />
    </div>
    <div className="text-right">
      <Button type="primary">发布评论</Button>
    </div>
    <List
      className="p-2"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item
          actions={[
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={
              <a href="https://ant.design">{item.title}</a>
            }
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  </>
)

export default App
