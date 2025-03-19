import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import { Home } from './pages/Home'
import { LaDolce } from './pages/La Dolce'
import { Hioki } from './pages/Hioki'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolce" element={<LaDolce />} />
    <Route path="/hioki" element={<Hioki />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
