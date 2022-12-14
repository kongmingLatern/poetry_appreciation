import {
  Avatar,
  Button,
  Input,
  List,
  message,
  Space,
} from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import http from '@/api'

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

const releaseComment = async (comment, pid) => {
  const uid = localStorage.getItem('uid')
  if (uid === 'undefined') {
    message.error('请先登录')
    window.location.href = '/login'
    return
  }
  const res: Record<string, any> = await http.post(
    '/addComment',
    {
      uid,
      comment,
      pid,
    }
  )
  if (res.code === 200) {
    message.success(res.msg)
  } else {
    message.error(res.msg)
  }
  window.location.reload()
}

const App: any = ({ comments, pid }) => {
  const [value, setValue] = useState<string>('')
  const result = (
    <>
      <div className="text-right pr-5 w-100 mx-auto">
        <TextArea
          className="w-100"
          showCount
          maxLength={100}
          placeholder="输入评论"
          onChange={e => setValue(e.target.value)}
          onPressEnter={() => releaseComment(value, pid)}
        />
      </div>
      <div className="text-right">
        <Button
          type="primary"
          onClick={() => releaseComment(value, pid)}
        >
          发布评论
        </Button>
      </div>
      <List
        className="p-2"
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={item => (
          <List.Item
          // actions={[
          //   <IconText
          //     icon={LikeOutlined}
          //     // text="156"
          //     key="list-vertical-like-o"
          //   />,
          // ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={
                <a href="https://ant.design">
                  {item.username}
                </a>
              }
              description={item.commentTime}
            />
            {item.comment}
          </List.Item>
        )}
      />
    </>
  )

  return result
}

export default App
