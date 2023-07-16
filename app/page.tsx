import { CustomFilter, Hero, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import { carModel } from "@/constants/data";
import { fetchCar } from "@/utils";
import Image from "next/image";

export default async function Home() {
  // const allCars=await fetchCar();
  // console.log(allCars)
  const allCars=carModel;
  const isDataEmpty=!Array.isArray(allCars)||allCars?.length<1||!allCars;
  console.log(isDataEmpty)

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
      {!isDataEmpty?(
        <section >
          <div className="home__cars-wrapper">
            {allCars?.map((car,i)=>(
              <CarCard  car={car} key={i}/>
            ))}
{/* we have cars */}
          </div>

        </section>
      ):(<div>
        <h2>OOps, no result</h2>
        <p></p>
      </div>)}
    </main>
  );
}
