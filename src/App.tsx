import './App.css'
import { Header } from './components/Header/Header'
import { MainblockBanner } from './components/MainblockBanner/Mainblock'
import { Footer } from './components/Footer/Footer'
import { Categories } from './components/Categories/Categories'
import { Products } from './components/Products/Products'
import { Search } from './components/Search/Search'

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <MainblockBanner/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App