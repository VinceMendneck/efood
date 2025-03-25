import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { RestaurantsPage } from './pages/RestaurantsPage'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantsPage />} />
  </Routes>
)
