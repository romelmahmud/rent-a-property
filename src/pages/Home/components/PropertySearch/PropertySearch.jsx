import React, { useState } from "react";
import { ArrowDownCircleIcon, CalendarIcon } from "@heroicons/react/24/outline";
// import { DayPicker } from "react-day-picker";

const PropertySearch = ({
  setFilterLocationData,
  setFilterPrice,
  setFilterType,
  filterDate,
  setFilterDate,
  handleSubmit,
}) => {
  // const [showDayPicker, setShowDayPicker] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Search properties to rent
        </h1>
        <div>
          <button className="text-gray-700 bg-white py-[6px] px-3 rounded-md border border-gray-500/50 mr-5 font-semibold flex justify-between items-center hover:bg-gray-50 transition-all duration-300 ease-in-out">
            Search with Search Bar
            <ArrowDownCircleIcon className="h-8 w-8 ml-4 font-thin" />
          </button>
        </div>
      </div>
      <div className="bg-white p-5 my-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          <div className="border-r-2 border-gray-300">
            <label
              htmlFor="location"
              className="form-label inline-block  text-gray-400 font-semibold text-md px-3 "
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              onChange={(e) => setFilterLocationData(e.target.value)}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-lg
        font-bold
        text-gray-900
        bg-white bg-clip-padding
       
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="Location"
              placeholder="New York, USA"
            />
          </div>
          <div className="border-r-2 border-gray-300">
            <label
              htmlFor="date"
              className="form-label inline-block  text-gray-400 font-semibold text-md px-3 "
            >
              When
            </label>
            <div className="flex justify-between items-center px-3">
              <p className="text-lg text-gray-400 font-bold">
                Select move-in Date
              </p>
              <CalendarIcon
                className="h-5 w-5 text-gray-500 cursor-pointer"
                // onClick={() => setShowDayPicker(!showDayPicker)}
              />
            </div>
          </div>
          <div className="border-r-2 border-gray-300">
            <label
              htmlFor="date"
              className="form-label inline-block  text-gray-400 font-semibold text-md px-3 "
            >
              Price
            </label>
            <select
              class="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-lg
      font-bold
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
    
      
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="price"
              onChange={(e) => setFilterPrice(e.target.value)}
              aria-label=".form-select-lg example"
            >
              <option selected value="all">
                Select Price
              </option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1001-2000">$1001 - $2000</option>
              <option value="2001-3000">$2001- $3000</option>
              <option value="3001- 5000">$3001 - $5000</option>
            </select>
          </div>
          <div className="border-r-2 border-gray-300">
            <label
              htmlFor="date"
              className="form-label inline-block  text-gray-400 font-semibold text-md px-3 "
            >
              Property Type
            </label>
            <select
              class="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-lg
      font-bold
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
    
      
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="type"
              onChange={(e) => setFilterType(e.target.value)}
              aria-label=".form-select-lg example"
            >
              <option selected value="all">
                Select Type
              </option>
              <option selected value="house">
                House
              </option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="text-white py-4 rounded-md border border-blue-700 bg-blue-700 text-xl font-semibold block mx-auto w-3/4 hover:bg-blue-600 transition-all ease-in-out"
            >
              Search
            </button>
          </div>
          {/* {showDayPicker && (
            <DayPicker
              mode="single"
              selected={filterDate}
              onSelect={setFilterDate}
              className="bg-white inline-block p-3 rounded shadow-sm "
            />
          )} */}
        </form>
      </div>
    </>
  );
};

export default PropertySearch;
