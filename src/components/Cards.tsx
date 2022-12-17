import http from '@/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardList from './CardList'
import SearchInput from './SearchInput'

export default function Cards() {
  const [data, setData] = useState<any[]>([])
  const [isSearch, setSearch] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      const res = await http.get('/getAllPoem')
      setData(res.data)
    }
    getData()
  }, [])

  const search = (flag) => {
    setSearch(flag)
  }

  return (
    <>
      <header className="h-15 lh-15 text-2xl bg-red-500 color-white mx-5">
        <h3>古诗一览</h3>
      </header>
      <SearchInput search={search} />
      {isSearch ? null : (
        <CardList data={data} navigate={navigate} />
      )}
    </>
  )
}
