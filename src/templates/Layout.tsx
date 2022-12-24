import { Outlet } from 'react-router-dom';
import Footer from '../molecules/typography/Footer';
import Header from '../molecules/typography/Header';

export default function Layout() {
  return <main className="container mx-auto max-w-md my-10 text-xs sm:text-base">
    <Header title="Weight" description="A simple app to calculate weights." />
    <Outlet />
    <Footer />
  </main>
}