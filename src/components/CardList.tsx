import { Card, Button } from 'antd'

export default function CardList({ data, navigate }) {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 mt-3 px-10 justify-items-center content-center">
      {data.map((item, key) => {
        return (
          <Card
            hoverable
            key={key}
            cover={
              <div className="text-center p-5">
                <h3 className="text-3xl">{item.pname}</h3>
                <p className="text-md">
                  作者：{item.author}
                </p>
                {/* 诗句 */}
                {item.pcontent.map(item => (
                  <p className="text-5">{item}</p>
                ))}
                <Button className="w-50 " type="primary">
                  查看详情
                </Button>
              </div>
            }
            onClick={() =>
              navigate('/poem/detail/' + item.pid)
            }
          />
        )
      })}
    </div>
  )
}
