import { useEffect, useState } from 'react'
import { List } from 'antd'
import http from '@/api'

const ArticleList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await http.get('/getAllArticle')
      console.log(res.data)
      setData(res.data)
    }
    getData()
  }, [])
  return (
    <List
      className="bg-white"
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page)
        },
        pageSize: 3,
      }}
      dataSource={data}
      renderItem={(item: any, index: number) => (
        <List.Item
          key={item.articleId}
          extra={
            <img
              width={272}
              height={200}
              alt="logo"
              src={
                index % 2
                  ? 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fppt.chnlib.com%2FFileUpload%2F2019-04%2FYa_Zhi_Shui_Mo_Zhong-190407_108.jpg&refer=http%3A%2F%2Fppt.chnlib.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673679399&t=2c7a62d226ef6d6c8b1d83eabd4f64e6'
                  : 'https://img2.baidu.com/it/u=2412251074,3579755891&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
              }
            />
          }
        >
          <List.Item.Meta
            title={
              <a href={item.href}>
                {index + 1}.{item.articleName}
              </a>
            }
            description={item.articleUser}
          />
          {item.articleContent}
        </List.Item>
      )}
    />
  )
}

export default ArticleList
