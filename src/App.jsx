import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import CountryQuiz from './pages/CountryQuiz'
import RootLayout from './RootLayout/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='countries' element={<Countries />} />
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