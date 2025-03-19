import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { LaDolce } from './pages/La Dolce'
import { Hioki } from './pages/Hioki'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolce" element={<LaDolce />} />
    <Route path="/hioki" element={<Hioki />} />
  </Routes>
)
