import './App.css'
import { Header } from './components/Header/Header'
import { MainblockBanner } from './components/MainblockBanner/Mainblock'
import { Footer } from './components/Footer/Footer'
import { Categories } from './components/Categories/Categories'
import { Products } from './components/Products/ProductsGrid'
import { Search } from './components/Search/Search'

function App() {
  return (
    <>
      <Header />
      <main>
        <Search />
        <MainblockBanner />
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  )
}

export default App