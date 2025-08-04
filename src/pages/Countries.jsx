// import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import Country from '../components/Country';

// const Countries = () => {
//   const [countriesData, setCountriesData] = useState([]);
//   const [sortType, setSortType] = useState('name-asc');
//   const [searchText, setSearchText] = useState('');
//   const [continentFilter, setContinentFilter] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(15);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   // Fetch once
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all?fields=name,population,area,capital,continents,languages,flags')
//       .then(res => {
//         if (!res.ok) throw new Error('Fetch error');
//         return res.json();
//       })
//       .then(data => setCountriesData(data))
//       .catch(console.error);
//   }, []);

//   // Memoized filtered + sorted countries
//   const filteredAndSorted = useMemo(() => {
//     let result = countriesData;

//     if (searchText) {
//       result = result.filter(country =>
//         country.name.common.toLowerCase().includes(searchText.toLowerCase())
//       );
//     }

//     if (continentFilter) {
//       result = result.filter(country =>
//         country.continents.includes(continentFilter)
//       );
//     }

//     result = [...result]; // Prevent in-place mutation

//     switch (sortType) {
//       case 'name-asc':
//         result.sort((a, b) => a.name.common.localeCompare(b.name.common));
//         break;
//       case 'name-desc':
//         result.sort((a, b) => b.name.common.localeCompare(a.name.common));
//         break;
//       case 'pop-asc':
//         result.sort((a, b) => a.population - b.population);
//         break;
//       case 'pop-desc':
//         result.sort((a, b) => b.population - a.population);
//         break;
//     }

//     return result;
//   }, [countriesData, searchText, continentFilter, sortType]);

//   const visibleCountries = useMemo(
//     () => filteredAndSorted.slice(0, visibleCount),
//     [filteredAndSorted, visibleCount]
//   );

//   // Reset scroll state on filter/sort/search change
//   useEffect(() => {
//     setVisibleCount(15);
//     setHasMore(true);
//   }, [searchText, continentFilter, sortType]);

//   // Scroll handler using requestAnimationFrame
//   const handleScroll = useCallback(() => {
//     const scrollTop = document.documentElement.scrollTop;
//     const windowHeight = window.innerHeight;
//     const fullHeight = document.documentElement.scrollHeight;

//     if (scrollTop + windowHeight + 100 >= fullHeight && !loading && hasMore) {
//       setLoading(true);
//       requestAnimationFrame(() => {
//         setTimeout(() => {
//           setVisibleCount(prev => {
//             const next = prev + 15;
//             if (next >= filteredAndSorted.length) {
//               setHasMore(false);
//             }
//             return next;
//           });
//           setLoading(false);
//         }, 1500);
//       });
//     }
//   }, [loading, hasMore, filteredAndSorted.length]);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [handleScroll]);

//   return (
//     <div className="custom-container mx-auto p-4">
//       {/* Search */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search country by name..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           className="border p-2 w-full rounded"
//         />
//       </div>

//       {/* Sort */}
//       <div className="flex gap-2 mb-4 flex-wrap">
//         {[
//           { label: 'Name A–Z', value: 'name-asc' },
//           { label: 'Name Z–A', value: 'name-desc' },
//           { label: 'Population ↑', value: 'pop-asc' },
//           { label: 'Population ↓', value: 'pop-desc' }
//         ].map(({ label, value }) => (
//           <button
//             key={value}
//             onClick={() => setSortType(value)}
//             className="px-3 py-1 bg-blue-500 text-white"
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Continents */}
//       <div className="flex mb-5 gap-2 flex-wrap">
//         {['All', 'Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania', 'Antarctic'].map((c, i) => (
//           <button
//             key={i}
//             onClick={() => setContinentFilter(c === 'All' ? null : c)}
//             className="px-3 py-1 bg-gray-400 text-white"
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       {/* No matches */}
//       {searchText && filteredAndSorted.length === 0 && (
//         <p className="text-red-500 mb-4">No matching countries found.</p>
//       )}

//       <p className="font-bold text-3xl mb-5">{filteredAndSorted.length} countries</p>

//       {/* Countries Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {visibleCountries.map(({
//           name: { common: name },
//           population,
//           capital = ['N/A'],
//           flags: { svg: flag },
//           continents: continent
//         }) => (
//           <Country
//             key={`${name},${capital}`}
//             name={name}
//             population={population}
//             capital={capital}
//             flag={flag}
//             continent={continent}
//           />
//         ))}
//       </div>

//       {/* Spinner */}
//       {loading && hasMore && (
//         <div className="flex justify-center items-center my-6">
//           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 dark:border-white"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Countries;

import React from 'react'

const Countries = () => {
  return (
    <div>Countries</div>
  )
}

export default Countries
