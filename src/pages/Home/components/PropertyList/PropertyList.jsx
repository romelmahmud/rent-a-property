import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyList = ({ propertyData }) => {
  if (propertyData.length === 0) {
    return (
      <h2 className="text-center text-xl font-bold text-gray-600">
        No Property Found
      </h2>
    );
  }
  return (
    <div
      className="grid gap-5 grid-cols-1 md:grid-cols-2
    lg:grid-cols-3 mt-10"
    >
      {propertyData.map((property) => (
        <PropertyCard data={property} key={property.id} />
      ))}
    </div>
  );
};

export default PropertyList;
