import Article from '@/views/home/Article'
import Culture from '@/views/home/Culture'
import { Tabs } from 'antd'
import Cards from './Cards'

export default function Contents() {
  const arr = [
    {
      label: '古诗大全',
      element: <Cards />,
    },
    {
      label: '古诗文化',
      element: <Culture />,
    },
    {
      label: '古诗文章',
      element: <Article />,
    },
  ]
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        centered
        items={arr.map((item, i) => {
          const id = String(i + 1)
          return {
            label: item.label,
            key: id,
            children: item.element,
          }
        })}
      />
    </>
  )
}
