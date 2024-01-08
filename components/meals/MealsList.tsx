import React from "react";
import MealItem from "./MealItem";

const MealsList = () => {
  return (
    <section className="max-w-[80%] mx-auto p-5 h-fit mt-10">
      <h2 className="text-7xl font-extrabold text-secodary/30 font-oswald uppercase">
        Popular meals
      </h2>
      <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8">
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
      </ul>
    </section>
  );
};

export default MealsList;
