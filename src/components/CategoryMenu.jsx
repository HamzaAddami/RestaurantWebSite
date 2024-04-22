import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6 pt-5 ">
      <h1 className="text-4xl text-center font-semibold pt-20 lg:text-center">Our Menu</h1>
      <div className="my-5 flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden items-center justify-center ">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-black text-white font-bold rounded-lg hover:bg-brightColor hover:text-white ${
            selectedCategory === "All" && "bg-orange-600  text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-black text-white font-bold rounded-lg hover:bg-brightColor hover:text-white ${
                selectedCategory === category && "bg-orange-600 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;