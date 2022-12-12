import { UserOutlined } from '@ant-design/icons'
import { Button, List } from 'antd'
import { Link } from 'react-router-dom'
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]
export default function RightAside() {
  return (
    <div className="bg-white">
      <header className="h-15 lh-15 text-2xl bg-red-500 color-white">
        <h3>古诗词文化</h3>
      </header>
      <main>
        <p className="theme_font text-5 indent">
          古代诗文化，四言为主、重章叠句的《诗经》显示出中国抒情为主的民族文学特色，从它开始，中国诗歌走上了一条抒情言志的道路，抒情诗也成为了我国诗歌的主要形式。《诗经》里关注现实的热情、强烈的政治道德意识、真挚积极的人生态度，被概括为“风雅”精神，成为中国诗歌的最基本最深远的传统。
          1风诗
          风诗也叫国风。“风”的意思是民间曲调，“风诗”就是各地的民歌。风诗下面又分:周南、召南、邶〔bèi贝〕、鄘〔yōng拥〕、卫、王、郑、齐、魏、唐、秦、陈、桧、曹、豳〔bīn宾〕等15国风，即分属这些地域的民歌。国风是下层人民的集体创作，“饥者歌其食，劳者歌其事”(何休《公羊传解诂》)，直为三小类。
        </p>
      </main>
    </div>
  )
}
