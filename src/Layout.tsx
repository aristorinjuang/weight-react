import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="container mx-auto max-w-md my-10 text-xs sm:text-base">
      <header className="text-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Weight</Link>
        </h1>
        <p>A simple app to calculate weights.</p>
      </header>
      <Outlet />
      <footer className="text-center">
        <p className="text-xs">Copyright &copy; 2022</p>
      </footer>
    </main>
  );
}

export default Layout;