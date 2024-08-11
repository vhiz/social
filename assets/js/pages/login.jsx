import LoginForm from '../components/LoginForm'
import Auth from '../layout/Auth'

export default function Login() {
  return (
    <Auth header={'Login'}>
      <LoginForm />
    </Auth>
  )
}
