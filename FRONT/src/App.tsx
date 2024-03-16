import './App.css'
import ButtonMenu from './components/ButtonMenu'
import Header from './components/Header'
import DemandTable from './components/data-table/DemandTable'
function App () {
  return (
    <main className='flex  flex-col gap-y-4 '>
    <Header></Header>
    <section className='m-auto'>
       <ButtonMenu></ButtonMenu>
       <DemandTable></DemandTable>
    </section>
    </main>
  )
}

export default App
