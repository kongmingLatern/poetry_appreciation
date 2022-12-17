import http from '@/api'
import { Divider, Empty, Input } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardList from './CardList'

const { Search } = Input

export default function SearchInput({ search }) {
  const [data, setData] = useState<any[]>([])
  const [isBegin, setBegin] = useState<boolean>(true)
  const navigate = useNavigate()

  const onSearch = async (value: string) => {
    const res = await http.get('/getAllPoem', {
      params: {
        pname: value,
      },
    })
    setData(res.data)
    search()
    setBegin(false)
  }

  return (
    <>
      <div className="text-right mr-5 mt-2">
        <Search
          placeholder="请输入要查找的古诗"
          onSearch={onSearch}
          enterButton
          className="w-70"
          size={'large'}
        />
      </div>

      {isBegin ? null : data.length > 0 ? (
        <>
          <header className="h-15 lh-15 text-2xl bg-green-500 color-white mx-5">
            <h3>搜索结果如下：</h3>
          </header>
          <CardList data={data} navigate={navigate} />
          <Divider />
        </>
      ) : (
        <Empty />
      )}
    </>
  )
}
