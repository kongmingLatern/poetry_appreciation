import { Input } from 'antd'

const { Search } = Input
const onSearch = (value: string) => console.log(value)

export default function SearchInput() {
  return (
    <div className="text-right mr-5 mt-2">
      <Search
        placeholder="请输入要查找的古诗"
        onSearch={onSearch}
        enterButton
        className="w-70"
        size={'large'}
      />
    </div>
  )
}
