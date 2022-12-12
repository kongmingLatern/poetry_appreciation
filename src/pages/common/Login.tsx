import Header from '@/components/Headers'
import LoginForm from '@/views/login/LoginForm'

export default function Login() {
  return (
    <div className="cover h-100vh">
      <Header />
      <div className="center">
        <LoginForm />
      </div>
    </div>
  )
}
