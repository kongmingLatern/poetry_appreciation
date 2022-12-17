import {
  columns as UserColumns,
  getData,
} from '@/utils/User'
import {
  columns as PoemColumns,
  getPoemData,
} from '@/utils/Poem'
import {
  columns as CommentColumns,
  getCommentData,
} from '@/utils/Comment'
import http from '@/api'
import { message } from 'antd'
export async function remove(type: string, id: string) {
  let res
  switch (type) {
    case 'comment':
      res = await http.delete('/deleteComment', {
        params: {
          cid: id,
        },
      })
      break
    case 'poem':
      res = await http.delete('/deletePoem', {
        params: {
          pid: id,
        },
      })
      break
    case 'user':
      res = await http.delete('/deleteUser', {
        params: {
          uid: id,
        },
      })
  }
  if (res.code === 200) {
    message.success(res.msg)
  } else {
    message.error(res.msg)
  }
  window.location.reload()
}

export {
  getData,
  getPoemData,
  getCommentData,
  UserColumns,
  PoemColumns,
  CommentColumns,
}
