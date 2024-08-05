import './App.css';
import { ActivityGraph, Feedback, Header, OptionAside, OrderCard, OrdersTable, ProfitCard, SideBar } from '../components';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <main className='pt-[5.5rem] pl-16 sm:pl-20 lg:pl-24 px-4 lg:px-12 py-6 pb-14'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4 pt-7'>
          <OrderCard />
          <ProfitCard />
          <ActivityGraph />
          <OptionAside />
          <OrdersTable />
          <Feedback />
        </div>
      </main>
    </>
  )
}

export default App
