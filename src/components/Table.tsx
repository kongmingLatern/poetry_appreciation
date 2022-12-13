import { Table } from 'antd'

const App = ({ columns, data }) => (
  <Table columns={columns} dataSource={data} />
)

export default App
