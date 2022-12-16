import ArticleList from './ArticleList'

export default function Article() {
  return (
    <div className="mx-5 my-5">
      <header className="h-15 lh-15 text-2xl bg-red-500 color-white">
        <h3>古诗好文章</h3>
      </header>
      <ArticleList />
    </div>
  )
}
