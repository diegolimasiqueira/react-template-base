import { LoginForm } from '@/Features/Auth/Components/LoginForm';
import { AuthLayout } from '@/Features/Auth/Components/AuthLayout';

const SignIn = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default SignIn; 