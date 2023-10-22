"use client";
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProfileModal from "@/components/profileModal";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { carModel } from "@/constants/data";
import { authenticateUser } from "@/lib/actions/user.action";

import { useAuth } from "@/useContext/context";

import { authentication, fetchCar } from "@/utils";
import Cookies from "js-cookie";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home({ searchParams }) {
  const [allCars, setAllCars] = useState({});
  const data = useAuth();
  const [user, setUser] = useState(data.user);

  useEffect(() => {
    const authUser = async () => {
      const loginUser = await authentication();
      setUser(loginUser);
      data.loginUser(loginUser);
    };
    authUser();
    const fetchCars = async () => {
      try {
        const cars = await fetchCar({
          manufacturer: searchParams.manufacturer || "",
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || "",
          limit: searchParams.limit || 10,
          model: searchParams.model || "",
        });
        setAllCars(cars); // Update state with fetched cars
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, [searchParams, user && user.id]);

  // export default async function Home() {

  const isDataEmpty =
    !Array.isArray(allCars) || allCars?.length < 1 || !allCars;

  
    const [open,setOpen]=useState(false)
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <main className="overflow-hidden pt-[5rem]">

        <div className="mt-12 padding-x padding-y max-width" id="collection">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Collection</h1>
            <p>Explore your car collection</p>
          </div>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" option={fuels} />
              <CustomFilter title="year" option={yearsOfProduction} />
            </div>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, i) => (
                <CarCard car={car} key={i} />
              ))}
              {/* we have cars */}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars?.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">OOps, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </main>
      
      {open?<ProfileModal show={open} setIsShow={setOpen}></ProfileModal>:""}
    </>
  );
}
