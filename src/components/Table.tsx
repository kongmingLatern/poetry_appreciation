import { Table } from 'antd'
import { useEffect, useState } from 'react'

const App = ({ columns, func }) => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getData() {
      setLoading(true)
      const res = await func()
      setResult(res)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <Table
      columns={columns}
      dataSource={result}
      loading={loading}
    />
  )
}

export default App
