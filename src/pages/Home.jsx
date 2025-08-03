import { RiArrowRightLongFill, RiFlag2Fill, RiFlagFill, RiTriangularFlagFill } from '@remixicon/react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="h-[90vh] flex items-center justify-center">
      <div className="relative px-5 sm:w-[640px] lg:w-[1024px]">
        <p className="text-[28px] font-extrabold text-center sm:text-5xl lg:text-7xl">
          Pack Your Curiosity, <br /> Let’s Explore the World!
        </p>
        <p className="mt-5 text-sm text-gray-700 font-semibold text-center sm:text-base lg:text-lg">
          From flags to fun facts, dive into every country’s cool stuff—capital cities, quirky currencies, popular languages, and more!
        </p>
        <div className="mt-10 text-center">
          <button className="px-5 py-3 font-semibold bg-black text-white rounded dark:bg-white dark:text-black ">
            <Link to='/countries' className='flex items-center gap-x-3'>
              Explore Countries Now <RiArrowRightLongFill />
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home