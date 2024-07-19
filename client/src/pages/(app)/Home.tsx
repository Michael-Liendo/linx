import useAuth from '../../hooks/Auth';

export default function HomeApp() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <h1>Home</h1>
      <h2>
        {user?.first_name} {user?.last_name} {user?.email}
      </h2>
    </>
  );
}
