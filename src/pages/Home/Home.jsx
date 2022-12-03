import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import PropertyList from "./components/PropertyList/PropertyList";

const Home = () => {
  return (
    <>
      <Navbar />
      <PropertyList />
    </>
  );
};

export default Home;
