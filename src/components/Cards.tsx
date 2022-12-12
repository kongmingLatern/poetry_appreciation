import { Button, Card } from 'antd'

const { Meta } = Card

const cardList = [
  <Card
    hoverable
    className="mx-5 my-5 flex items-center justify-center pl-5 theme_font"
    cover={
      <div className="text-center pt-5">
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
        <Button className="w-50 mb-5" type="primary">
          评论
        </Button>
      </div>
    }
  >
    <Meta
      title="古诗介绍"
      description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    />
    <Meta
      title="作者介绍"
      description="www.instagram.com"
      className="mt-2"
    />
    <Meta
      title="诗句鉴赏"
      description="www.instagram.com"
      className="mt-2"
    />
  </Card>,
  <Card
    hoverable
    className="mx-5 my-5 flex items-center justify-center pl-5 theme_font"
    cover={
      <div className="text-center pt-5">
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
        <Button className="w-80 mb-5" type="primary">
          评论
        </Button>
      </div>
    }
  >
    <Meta
      title="古诗介绍"
      description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    />
    <Meta
      title="作者介绍"
      description="www.instagram.com"
      className="mt-2"
    />
    <Meta
      title="诗句鉴赏"
      description="www.instagram.com"
      className="mt-2"
    />
  </Card>,
]

export default function Cards(): any {
  return (
    <>{new Array(10).fill(cardList).map(item => item)}</>
  )
}
