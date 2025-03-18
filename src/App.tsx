import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import { Home } from './pages/Home'
import { Header } from './components/menuComp/Header'
import { Banner } from './components/menuComp/Banner'
import { Menu } from './components/menuComp/Menu'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/ladolce',
    element: (
      <>
        <Header />
        <Banner />
        <Menu />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
