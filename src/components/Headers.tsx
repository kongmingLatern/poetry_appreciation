export default function Header() {
  const exit = () => {
    localStorage.clear()
    window.location.href = '/login'
  }
  return (
    <h3 className="text-center h-15 lh-15 img text-2xl">
      诗词鉴赏
    </h3>
  )
}
