import { ActivityGraph, Header, OptionAside, OrderCard, ProfitCard, SideBar } from '../components'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <main className='pt-[5.5rem] pl-16 sm:pl-20 lg:pl-24 px-4 lg:px-12 py-6'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4 pt-7'>
          <OrderCard />
          <ProfitCard />
          <ActivityGraph />
          <OptionAside />
          {/* <div className='border-2 border-green-500 col-span-3 mt-5 ml-5 w-full'>Option Aside</div> */}
          {/* <div className='border-2 border-green-500 col-span-4 mt-5 w-full'>Orders Table</div> */}
          {/* <div className='border-2 border-green-500 col-span-3 mt-5 ml-5 w-full'>Feedback</div> */}
        </div>
      </main>
    </>
  )
}

export default App
