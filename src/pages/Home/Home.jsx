import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import PropertyList from "./components/PropertyList/PropertyList";
import PropertySearch from "./components/PropertySearch/PropertySearch";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <section className="mx-auto max-w-6xl py-12 px-4">
        <PropertySearch />
        <PropertyList />
      </section>
    </div>
  );
};

export default Home;
