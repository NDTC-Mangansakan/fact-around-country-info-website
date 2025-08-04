import { useLocation } from "react-router-dom"

const NorthAmericaCountries = () => {
  const location = useLocation()
  const countries = location.state?.countries || []

  return (
    <div>
      <h1 className='text-3xl font-bold'>Asia Countries</h1>
      <ul className='mt-4 space-y-2'>
        {countries.map(country => (
          <li key={country.name.common} className="p-4 border rounded shadow">
            <p><strong>{country.name.common}</strong></p>
            <p>Capital: {country.capital?.[0]}</p>
            <p>Population: {country.population.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NorthAmericaCountries