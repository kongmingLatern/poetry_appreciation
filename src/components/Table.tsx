import { Table } from 'antd'
import { useEffect, useState } from 'react'

const App = ({ columns, func }) => {
  const [result, setResult] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await func()
      setResult(res)
    }
    getData()
  }, [])

  return (
    <>
      <Table columns={columns} dataSource={result} />
    </>
  )
}

export default App
