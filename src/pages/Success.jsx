import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#F4511F" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
          <a href="javascript:void(0)" className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600" onClick={() => Navigate(0)}>
                                Back to Home
                            </a>
        </div>
      )}
    </div>
  );
};

export default Success;