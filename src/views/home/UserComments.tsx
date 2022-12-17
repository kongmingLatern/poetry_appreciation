import UserList from '@/views/detail/DetailList'
export default function UserComments({ data }) {
  return (
    <UserList comments={data.comments} pid={data.pid} />
  )
}
