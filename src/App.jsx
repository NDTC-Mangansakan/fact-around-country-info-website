import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import CountryQuiz from './pages/CountryQuiz'
import RootLayout from './RootLayout/RootLayout'
import Prac from './components/Prac'
import AsiaCountries from '../src/components/AsiaCountries'
import EuropeCountries from '../src/components/EuropeCountries'
import NorthAmericaCountries from '../src/components/NorthAmericaCountries'
import SouthAmericaCountries from '../src/components/SouthAmericaCountries'
import AfricaCountries from '../src/components/AfricaCountries'
import OceaniaCountries from '../src/components/OceaniaCountries'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

      {/* Route for / only */}
      <Route index element={<Home />} />

      {/* Route for /prac only */}
      <Route path='prac' element={<Prac />} />

      {/* Full new pages, still under /prac/ but no Prac.jsx shown */}
      <Route path='prac/asia-countries' element={<AsiaCountries />} />
      <Route path='prac/europe-countries' element={<EuropeCountries />} />
      <Route path='prac/north-america-countries' element={<NorthAmericaCountries />} />
      <Route path='prac/south-america-countries' element={<SouthAmericaCountries />} />
      <Route path='prac/africa-countries' element={<AfricaCountries />} />
      <Route path='prac/oceania-countries' element={<OceaniaCountries />} />

      <Route path='country-quiz' element={<CountryQuiz />} />
    </Route>
  )
)



const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App