import Card from "@/components/card";
import Navigation from "@/components/navigation";
import { initArray } from "@/utils/array";
import { useState } from "react";

const CATAGORIES = [
  {
    name: "All catagory",
    value: "*",
  },
  {
    name: "Dinner",
    value: "*",
  },
  {
    name: "Lunch",
    value: "*",
  },
  {
    name: "Dessert",
    value: "*",
  },
  {
    name: "Drink",
    value: "*",
  },
];

const Menu = () => {
  const [selected, getSelected] = useState(CATAGORIES[0]);
  const FOODS = initArray(10);
  return (
    <div className="mb-20">
      <div className="flex justify-between">
        {CATAGORIES.map((catagory) => (
          <p
            key={catagory.name}
            className={`cursor-pointer mx-2 font-light w-40 text-center py-3 ${
              selected?.name === catagory.name
                ? "bg-brown text-white"
                : "bg-gray/20 text-brown"
            } hover:bg-brown hover:text-white rounded-full `}
          >
            {catagory.name}
          </p>
        ))}
      </div>
      <div
        className="mt-16 justify-center grid mx-auto items-center max-tablet:grid-cols-1 
      max-desktop:grid-cols-2 grid-cols-3 gap-12"
      >
        {FOODS.map((_, index) => (
          <Card className="mx-auto" key={index} />
        ))}
      </div>

      <Navigation className="mt-16 mx-auto w-fit"/>
    </div>
  );
};

export default Menu;
