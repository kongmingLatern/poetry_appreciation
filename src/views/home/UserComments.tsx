import List from '@/views/detail/List'
export default function UserComments({ data }) {
  return <List comments={data.comments} pid={data.pid} />
}
