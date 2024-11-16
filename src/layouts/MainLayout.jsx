import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import LatestNews from '../components/LatestNews/LatestNews'
import Navbar from '../components/Navbar/Navbar'
import Categories from '../components/Categories/Categories'
import SocialLogin from '../components/SocialLogin/SocialLogin'
import FindUs from '../components/FindUs/FindUs'

const MainLayout = () => {

   return (
      <div className='font-poppins min-h-screen space-y-4'>
         <header className='max-w-6xl mx-auto space-y-2'>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
         </header>
         <main className='min-h-[450px]  sm:grid grid-cols-12 gap-4 max-w-6xl mx-auto sticky top-0 left-0 z-10'>
            <aside className='left sm:col-span-3'>
               <Categories></Categories>
            </aside>
            <section className='main sm:col-span-6 max-h-[800px] overflow-auto'>
               <Outlet></Outlet>
            </section>
            <aside className='right sm:col-span-3 space-y-8'>
               <SocialLogin></SocialLogin>
               <FindUs></FindUs>
            </aside>
         </main>
      </div>
   )
}

export default MainLayout
