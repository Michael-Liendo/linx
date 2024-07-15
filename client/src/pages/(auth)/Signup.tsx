import { type FormEvent, useState } from 'react';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Services from '../../services';

export default function Signup() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!name || !lastName || !email || !password) {
      return alert('Please complete the fields!');
    }

    try {
      const results = await Services.auth.register({
        first_name: name,
        last_name: lastName,
        email,
        password,
      });

      console.log(results);
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
          <form
            onSubmit={handleSubmit}
            className="w-96 bg-slate-200 rounded-xl py-4 px-4 space-y-2"
          >
            <div className="flex justify-center w-full items-center space-x-3">
              <TextField
                className="w-full"
                name="first_name"
                placeholder="John"
                label="First Name"
                onChange={(val) => setName(val)}
                required
              />
              <TextField
                className="w-full"
                name="last_name"
                placeholder="Doe"
                label="Last Name"
                onChange={(val) => setLastName(val)}
                required
              />
            </div>
            <TextField
              type="email"
              placeholder="example@email.com"
              className="w-full"
              name="email"
              label="Email"
              onChange={(val) => setEmail(val)}
              required
            />
            <TextField
              label="Password"
              className="w-full"
              name="password"
              type="password"
              placeholder="* * * * * * *"
              onChange={(val) => setPassword(val)}
              required
            />
            <Button type="submit" className="w-full mt-4">
              Sign Up
            </Button>
          </form>
          <div className="text-center w-full text-white mt-3">
            {'Do you have an account? '}
            <a className="underline" href="/login">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
