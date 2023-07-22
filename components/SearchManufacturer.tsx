import { manufacturers } from "@/constants";
import { searchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { ifError } from "assert";
import Image from "next/image";
import React, { Fragment, useState } from "react";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: searchManufacturerProps) {
  const [query, setQuery] = useState("");
  const filteredManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[10px]">
            <Image
              src="/car-logo.svg"
              width={20}
              alt="car logo"
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            name="manufacturer"
            placeholder="volkswagen"
            onChange={(e) => {
              setQuery(e.target.value);
             
            }}
          ></Combobox.Input>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setQuery("");
            }}
          >
            <Combobox.Options>
              {filteredManufacturer.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer-option"
                >
                  create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturer.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
