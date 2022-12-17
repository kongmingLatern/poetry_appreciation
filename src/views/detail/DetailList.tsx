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
  const uid = localStorage.getItem('uid') ?? null

  if (uid === 'undefined' || uid === null) {
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
    setTimeout(() => {
      window.location.reload()
    }, 500)
  } else {
    message.error(res.msg)
  }
}

const App: any = ({ comments, pid }) => {
  const [value, setValue] = useState<string>('')
  const imgUrl = [
    'https://tva1.sinaimg.cn/large/466f79e8ly1fw5oi9coj2j20nm0go15j.jpg',
    'https://tva1.sinaimg.cn/large/466f79e8ly1fw5oha9y5xj21hc0w515j.jpg',
    'https://tva1.sinaimg.cn/large/466f79e8ly1fw5oi8j6wpj20rq0hwq9v.jpg',
    'https://tva1.sinaimg.cn/large/466f79e8ly1fw5ohbvfenj23ji294e3o.jpg',
  ]

  const result = (
    <>
      <div className="text-right pr-5 w-100 mx-auto">
        <TextArea
          className="w-100 relative"
          showCount
          maxLength={150}
          placeholder="输入评论"
          onChange={e => setValue(e.target.value)}
          onPressEnter={() => releaseComment(value, pid)}
        />
        <Button
          type="link"
          className="absolute right-20vw bg-pink-500 color-white z-2"
          onClick={() => releaseComment(value, pid)}
        >
          发布评论
        </Button>
      </div>

      <List
        className="p-2"
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item: any) => (
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
                <Avatar
                  src={
                    imgUrl[Math.floor(Math.random() * 3)]
                  }
                />
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
