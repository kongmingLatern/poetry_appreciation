import Header from '@/components/Headers'
import List from '@/views/detail/List'
import { Divider } from 'antd'
export default function Detail() {
  return (
    <div className="detail-container">
      <Header />
      <div className="card bg-white">
        <div className="card_img text-center">
          <h3 className="text-3xl">绝句</h3>
          <p className="text-md">作者：123123</p>
          <p className="text-5">
            两个黄鹂鸣翠柳，一行白鹭上青天
          </p>
          <p className="text-5">
            两个黄鹂鸣翠柳，一行白鹭上青天
          </p>
          <p className="text-5">
            两个黄鹂鸣翠柳，一行白鹭上青天
          </p>
          <p className="text-5">
            两个黄鹂鸣翠柳，一行白鹭上青天
          </p>
        </div>
        <Divider className="bg-white h-10 lh-10 text-2xl">
          作者介绍
        </Divider>
        <p className="text-xl p-5">
          杜甫（712年2月12日 [1]
          ～770年），字子美，自号少陵野老，唐代伟大的现实主义诗人，与李白合称“李杜”。出生于河南巩县，原籍湖北襄阳。
          [2-3]
          为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”，杜甫也常被称为“老杜”。
          [2]
          杜甫少年时代曾先后游历吴越和齐赵，其间曾赴洛阳应举不第。三十五岁以后，先在长安应试，落第；后来向皇帝献赋，向贵人投赠。官场不得志，目睹了唐朝上层社会的奢靡与社会危机。天宝十四载（755年），安史之乱爆发，潼关失守，杜甫先后辗转多地。乾元二年（759年）杜甫弃官入川，虽然躲避了战乱，生活相对安定，但仍然心系苍生，胸怀国事。杜甫创作了《登高》《春望》《北征》以及“三吏”、“三别”等名作。虽然杜甫是个现实主义诗人，但他也有狂放不羁的一面，从其名作《饮中八仙歌》不难看出杜甫的豪气干云。
        </p>
        <Divider className="bg-white h-10 lh-10 text-2xl">
          古诗介绍
        </Divider>

        <p className="text-xl p-5">
          杜甫（712年2月12日 [1]
          ～770年），字子美，自号少陵野老，唐代伟大的现实主义诗人，与李白合称“李杜”。出生于河南巩县，原籍湖北襄阳。
          [2-3]
          为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”，杜甫也常被称为“老杜”。
          [2]
        </p>
        <Divider className="bg-white h-10 lh-10 text-2xl">
          诗句鉴赏
        </Divider>
        <p className="text-xl p-5">
          杜甫（712年2月12日 [1]
          ～770年），字子美，自号少陵野老，唐代伟大的现实主义诗人，与李白合称“李杜”。出生于河南巩县，原籍湖北襄阳。
          [2-3]
          为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”，杜甫也常被称为“老杜”。
          [2]
        </p>
        <Divider className="bg-white h-10 lh-10 text-2xl">
          用户评论
        </Divider>
        <List />
      </div>
    </div>
  )
}
