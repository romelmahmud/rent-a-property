import React, { useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import PropertyList from "./components/PropertyList/PropertyList";
import PropertySearch from "./components/PropertySearch/PropertySearch";

const data = [
  {
    id: "01",
    propertyName: "Plam Harber",
    location: "12344,New york, USA",
    imgUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 600,
    beds: 4,
    bathrooms: 3,
    totalSpace: "5*3",
    type: "house",
    available: new Date("3 December, 2022"),
  },
  {
    id: "02",
    propertyName: "Spring Field",
    location: "344,Lack Sevilla, TX",
    imgUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 1600,
    beds: 2,
    bathrooms: 1,
    totalSpace: "3*3",
    type: "villa",
    available: new Date("5 December, 2022"),
  },
  {
    id: "03",
    propertyName: "Beach Harber",
    location: "234, Miami, USA",
    imgUrl:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 1700,
    beds: 5,
    bathrooms: 6,
    totalSpace: "16*7",
    type: "villa",
    available: new Date("6 December, 2022"),
  },
  {
    id: "04",
    propertyName: "Mountain view",
    location: "23, Boston, USA",
    imgUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 900,
    beds: 3,
    bathrooms: 3,
    totalSpace: "7*5",
    type: "house",
    available: new Date("10 December, 2022"),
  },
  {
    id: "05",
    propertyName: "Road Start",
    location: "864, SmallVil, NY",
    imgUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 2600,
    beds: 6,
    bathrooms: 8,
    totalSpace: "45*37",
    type: "villa",
    available: new Date("15 December, 2022"),
  },
  {
    id: "06",
    propertyName: "Sun Riser",
    location: "54, Woodland, IN",
    imgUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 3100,
    beds: 4,
    bathrooms: 3,
    totalSpace: "35*53",
    type: "villa",
    available: new Date("3 December, 2022"),
  },
  {
    id: "07",
    propertyName: "Rose Garden",
    location: "244,New york, USA",
    imgUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 3600,
    beds: 3,
    bathrooms: 2,
    totalSpace: "5*3",
    type: "house",
    available: new Date("20 December, 2022"),
  },
  {
    id: "08",
    propertyName: "Garden view",
    location: "44, Miami, USA",
    imgUrl:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 1300,
    beds: 3,
    bathrooms: 2,
    totalSpace: "45*3",
    type: "house",
    available: new Date("3 December, 2022"),
  },
  {
    id: "09",
    propertyName: "Street view",
    location: "104, Woodland, IN",
    imgUrl:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 1900,
    beds: 3,
    bathrooms: 2,
    totalSpace: "25*13",
    type: "villa",
    available: new Date("6 December, 2022"),
  },
];

const Home = () => {
  const [propertyData, setPropertyData] = useState(data);
  const [filterLocationData, setFilterLocationData] = useState("");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filterType, setFilterType] = useState("all");
  // const [filterDate, setFilterDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(filterLocationData, filterPrice, filterType);

    const minPrice = +filterPrice.split("-")[0];
    const maxPrice = +filterPrice.split("-")[1];

    const oldProperties = [...propertyData];

    const filteredAllProperties = oldProperties.filter((property) => {
      if (
        !property.location
          .toLowerCase()
          .includes(filterLocationData.toLowerCase())
      )
        return false;

      if (property.price < minPrice || property.price > maxPrice) {
        return false;
      }

      if (property.price === "all") return property;

      if (filterType && property.type !== filterType) {
        return false;
      }

      if (property.type === "all") return property;

      return true;
    });
    console.log(filteredAllProperties);

    setPropertyData(filteredAllProperties);
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <section className="mx-auto max-w-6xl py-12 px-4">
        <PropertySearch
          setFilterLocationData={setFilterLocationData}
          setFilterPrice={setFilterPrice}
          setFilterType={setFilterType}
          handleSubmit={handleSubmit}
        />
        <PropertyList propertyData={propertyData} />
      </section>
    </div>
  );
};

export default Home;
