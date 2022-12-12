import Header from '@/components/Headers'
import RegisterForm from '@/views/login/RegisterForm'

export default function Register() {
  return (
    <div className="cover h-100vh">
      <Header />
      <div className="center">
        <RegisterForm />
      </div>
    </div>
  )
}
