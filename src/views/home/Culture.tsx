const data = [
  `古代诗文化，四言为主、重章叠句的《诗经》显示出中国抒情为主的民族文学特色，从它开始，中国诗歌走上了一条抒情言志的道路，抒情诗也成为了我国诗歌的主要形式。《诗经》里关注现实的热情、强烈的政治道德意识、真挚积极的人生态度，被概括为“风雅”精神，成为中国诗歌的最基本最深远的传统。风诗，风诗也叫国风。“风”的意思是民间曲调，“风诗”就是各地的民歌。风诗下面又分:周南、召南、邶〔bèi贝〕、鄘〔yōng拥〕、卫、王、郑、齐、魏、唐、秦、陈、桧、曹、豳〔bīn宾〕等15国风，即分属这些地域的民歌。国风是下层人民的集体创作，“饥者歌其食，劳者歌其事”(何休《公羊传解诂》)，直为三小类。`,
  `古诗是中国的一种传统文化，继承了许多古人写的诗词，让我们现代人好好阅读和回味。古诗是体现了中国几千年的历史遗迹，让我们流传到如今。古诗是前人所写的诗句，让我们体会那个年代和朝代的世界，让我们体会他们的生活情景。
  古诗所表达的感情融入到美景中，可以展现出美轮美奂的意境，让我们流连忘返。情景相融合，体现出世间万物的本质，让人们知道什么叫心境合一乃天晴。`,
  `心境之深者乃是诗人也，万物之神乃天也。古诗之妙在于精，情景相融汇广通。天晴心好病无身，健康长寿命长生。古人写诗动态景，出笔如神在于精。
  诗词的千变万化在于景物的描写和心境之深的理解，让诗词达到了“情融景，心合一”的魔幻效果。诗词文化情生景，诗人吟诗喝泉井。动笔如神心如境，飘絮一念被封禁。
  心中的境界体现了你对古诗的理解或深或浅，让你无法判断自己能不能体验到诗人的感受和心境。心境能体现你对各种诗句的掌握和诗句的用法，让你知道如何下笔如有神的写诗词，这就是心境合一乃天晴。天晴就像心情一样心有大爱，体会各种人间冷暖，让你感觉情景和心境是古诗的精髓。`,
]
export default function Culture() {
  return (
    <div className="bg-white mx-5">
      <header className="h-15 lh-15 text-2xl bg-red-500 color-white">
        <h3>古诗词文化</h3>
      </header>
      <main>
        {data.map((item, key) => (
          <p className="theme_font text-5 indent" key={key}>
            {item}
          </p>
        ))}
      </main>
    </div>
  )
}