import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Recipe from './pages/Recipe'
import SearchResult from './pages/SearchResult'

function App() {
  return (
    <div>
      <Header />
      {/* <Recipe /> */}
      <SearchResult/>
      <Footer />
    </div>
  )

}

export default App
