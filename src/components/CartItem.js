import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import { Slide, toast } from "react-toastify";

const CartItem = ({ key, index, item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeItem(item.id));
    toast.error("Item removed from Cart", {
      position: "top-center",
      autoClose: 1000,
      pauseOnHover: true,
      transition: Slide,
      style: {
        width: "60%",
        height: "20px",
        lineHeight: "10px",
        fontSize: "12px",
        borderRadius: "15px",
        textAlign: "center",
      },
      progressStyle: {
        backgroundColor: "#FF0000", // Custom color for the progress bar (example: orange)
      },
    });
  };
  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={item.image} alt="" />
        </div>

        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">
            {item.title.split(" ").slice(0, 8).join(" ") + "..."}
          </h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>

          <div className="flex items-center justify-between"  >
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeFromCart}>
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 h-2 max-w-[650px] "></div>
    </div>
  );
};

export default CartItem;
