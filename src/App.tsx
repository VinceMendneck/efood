import { Hero } from './components/homeComp/Hero'
import { Banner } from './components/menuComp/Banner'
import { Header } from './components/menuComp/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
    </>
  )
}

export default App
