import React from 'react'

const Country = ({ name, population = 'Unknown', capital = 'Unknown', flag, continent }) => {
    return (
        <div className='rounded border-2 dark:border-white bg-white text-black dark:bg-black dark:text-white flex flex-col justify-start'>
            <div className="w-full h-50">
                <img src={flag} alt="country flag" className='w-full h-full object-cover' />
            </div>
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-lg text-semibold">Population: {population}</p>
            <p className="text-lg text-semibold">Continent: {continent}</p>
            <p className="text-lg text-semibold">Capital: {capital}</p>
        </div>
    )
}

export default Country