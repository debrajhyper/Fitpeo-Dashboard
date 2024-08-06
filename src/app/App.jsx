import { ActivityGraph, Feedback, Header, OptionAside, OrderCard, OrdersTable, ProfitCard, SideBar } from '../components';

/**
 * App component is the main component of the application.
 * It renders the header, sidebar and the main content of the application.
 * The main content includes the dashboard, ordercard, profitcard, activitygraph, optionaside, orderstable and feedback components.
 */
function App() {
  return (
    <>
      {/* Render the header */}
      <Header />

      {/* Render the sidebar */}
      <SideBar />

      {/* Render the main content */}
      <main className='pt-20 lg:pt-[5.5rem] pl-16 sm:pl-20 lg:pl-24 px-4 lg:px-16 py-6 pb-10'>
        {/* Render the dashboard title */}
        <h1 className='text-3xl font-bold'>Dashboard</h1>

        {/* Render the main grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4 xl:gap-y-9 pt-7'>
          {/* Render the ordercard component */}
          <OrderCard />

          {/* Render the profitcard component */}
          <ProfitCard />

          {/* Render the activitygraph component */}
          <ActivityGraph />

          {/* Render the optionaside component */}
          <OptionAside />

          {/* Render the orderstable component */}
          <OrdersTable />

          {/* Render the feedback component */}
          <Feedback />
        </div>
      </main>
    </>
  )
}

export default App