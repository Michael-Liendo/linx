import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField } from '@/components/text-field';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useAuth from '../../hooks/Auth';
import Services from '../../services';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setToken } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      return alert('Please complete the fields!');
    }

    try {
      const results = await Services.auth.login({ email, password });
      console.log(results);
      setToken(results.data.token);
      navigate('/home');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="min-h-screen relative flex justify-center items-center bg-no-repeat bg-cover bg-slate-800 bg-[url('https://images.unsplash.com/photo-1720712738661-9c0dcb92f06d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="absolute bg-black rounded-[50%] w-full h-full blur-[23rem]" />
      <div className="flex justify-center items-center z-20">
        <div className="w-full">
          <h1 className="text-6xl text-center font-bold text-white mb-16">
            Linx
          </h1>

          <Card className="w-96">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <TextField
                  type="email"
                  placeholder="example@email.com"
                  className="w-full"
                  name="email"
                  label="Email Address"
                  onValue={(value) => setEmail(value)}
                  required
                />

                <TextField
                  className="w-full"
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="* * * * * * *"
                  onValue={(value) => setPassword(value)}
                  required
                />
                <Button type="submit" className="w-full mt-4">
                  Log in
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="text-center w-full text-white mt-3">
            {'Do you not have an account? '}
            <a className="underline" href="/signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
