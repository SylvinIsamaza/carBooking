"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";

import { useRouter } from "next/navigation";
const SearchBar = () => {
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model == "") {
      return alert("Please fill in the search bar");
    }
    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      if (model) {
        searchParams.set("model", model);
      } else {
        searchParams.delete("model");
      }
      if (manufacturer) {
        searchParams.set("manufacturer", manufacturer);
      } else {
        searchParams.delete("manufacturer");
      }
      const newPathName = `${
        window.location.pathname
      }?${searchParams.toString()}`;
      router.push(newPathName);
    };
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());

  };
  const SearchButton = ({ otherClassess }: { otherClassess: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClassess}`}>
      <Image
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        alt="magnifying glass"
        className="object-contain"
      />
    </button>
  );
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClassess="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClassess="sm:hidden" />
      </div>
      <SearchButton otherClassess="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
