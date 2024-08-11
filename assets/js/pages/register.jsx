import RegisterForm from "../components/RegisterForm";
import Auth from "../layout/Auth";

export default function Register() {
  return (
    <Auth header={'Register'}>
      <RegisterForm />
    </Auth>
  )
}
