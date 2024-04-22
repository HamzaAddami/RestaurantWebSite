import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-black p-5 flex flex-col rounded-lg gap-2 ">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between text-white">
        <h2>{name}</h2>
        <span className="text-yellow-400 ">{price} MAD</span>
      </div>
      <p className="text-sm font-normal text-white">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center text-white items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, price, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="p-1 text-white bg-brightColor  rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;