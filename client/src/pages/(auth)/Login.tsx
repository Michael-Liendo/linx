import TextField from '../../components/TextField';

export default function Signup() {
  return (
    <div className="min-h-screen relative flex justify-center items-center bg-no-repeat bg-cover bg-slate-800 bg-[url('https://images.unsplash.com/photo-1580192985016-7e15ef081dd8?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="absolute bg-black rounded-[50%] w-full h-full blur-[23rem]" />
      <div className="flex justify-center items-center z-20">
        <div className="w-full">
          <h1 className="text-6xl text-center font-bold text-white mb-16">
            TownHall
          </h1>
          <form className="w-96">
            <TextField className="w-full" name="name" placeholder="Name" />
            <TextField
              className="w-full"
              name="surname"
              placeholder="Surname"
            />
            <TextField
              className="w-full"
              name="username"
              placeholder="Username"
            />
            <TextField className="w-full" name="email" placeholder="Email" />
            <TextField
              className="w-full"
              name="password"
              type="password"
              placeholder="Password"
            />
            <button
              type="button"
              className="bg-blue-700 text-white font-bold w-full mt-3 rounded-md py-3 px-4"
            >
              Login
            </button>
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
