import { CustomFilter, Hero, SearchBar } from '@/components'
import { IHomeCarCatalogueFilter } from '@/types';
import { fetchCars } from '@/utils';

export default async function Home({ searchParams }: IHomeCarCatalogueFilter) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the Cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />  
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>  
      </div>
    </main>
  )
}
