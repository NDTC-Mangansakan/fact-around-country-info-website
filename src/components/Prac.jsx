import asiaContinent from '../assets/img/asia-continent.png'
import europeContinent from '../assets/img/europe-continent.png'
import northAmericaContinent from '../assets/img/north-america-continent.png'
import southAmericaContinent from '../assets/img/south-america-continent.png'
import africaContinent from '../assets/img/africa-continent.png'
import oceaniaContinent from '../assets/img/oceania-continent.png'
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

const continents = [
    {
        name: 'Asia',
        link: 'asia-countries',
        img: asiaContinent
    },
    {
        name: 'Europe',
        link: 'europe-countries',
        img: europeContinent
    },
    {
        name: 'North America',
        link: 'north-america-countries',
        img: northAmericaContinent
    },
    {
        name: 'South America',
        link: 'south-america-countries',
        img: southAmericaContinent
    },
    {
        name: 'Africa',
        link: 'africa-countries',
        img: africaContinent
    },
    {
        name: 'Oceania',
        link: 'oceania-countries',
        img: oceaniaContinent
    },
]

const Prac = () => {
    const [countriesData, setCountriesData] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,population,area,capital,continents,languages,flags')
            .then(res => {
                if (!res.ok) throw new Error('Fetch Error')
                return res.json()
            })
            .then(data => {
                setCountriesData(data)
                console.log('hello')
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='py-10'>
            <p className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
                Explore Countries <br /> by Continent!
            </p>

            <div className="mt-10 px-5 mx-auto max-w-sm grid gap-5 grid-cols-1 sm:grid-cols-2 sm:max-w-xl lg:grid-cols-3 lg:max-w-4xl">
                {continents.map(continent => (
                    <ContinentComponent
                        key={continent.name}
                        name={continent.name}
                        img={continent.img}
                        link={continent.link}
                        countriesData={countriesData}
                    />
                ))}
            </div>
        </div>
    )
}

const ContinentComponent = ({ name, img, link, countriesData }) => {
    const [sortType, setSortType] = useState('name-asc')

    const filteredAndSortedCountries = useMemo(() => {
        let result = countriesData.filter(country =>
            country.continents.includes(name)
        )

        switch (sortType) {
            case 'name-asc':
                result.sort((a, b) => a.name.common.localeCompare(b.name.common));
                break;
            case 'name-desc':
                result.sort((a, b) => b.name.common.localeCompare(a.name.common));
                break;
            case 'pop-asc':
                result.sort((a, b) => a.population - b.population);
                break;
            case 'pop-desc':
                result.sort((a, b) => b.population - a.population);
                break;
        }

        return result;
    }, [countriesData, name, sortType])


    return (
        <div className="group relative overflow-hidden">
            <img src={img} alt={name} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' />

            <Link to={`${link}`} state={{ countries: filteredAndSortedCountries }}>
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                    <p className="text-xl font-bold text-white">Visit {name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Prac