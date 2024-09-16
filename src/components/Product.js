import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/cartSlice";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem(post));
    toast.success("Item added to Cart", {
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
    });
  };
  const removeFromCart = () => {
    dispatch(removeItem(post.id));
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
    <div className="mt-[7rem] flex flex-col items-center justify-between hover:scale-110 transition duration-200 ease-in hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:rounded-xl p-4 gap-3  ml-5 rounded-xl outline ">
      <div>
        <p className="font-semibold  text-gray-700  text-lg truncate w-40 mt-1 ">
          {post.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[12px] text-left ">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px] ">
        <img
          src={post.image}
          className="h-full w-full "
          alt={`img of ${post.title}`}
        />
      </div>
      <div className="flex mx-auto justify-evenly items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold ">${post.price}</p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200 ease-in">Remove Item</button>
        ) : (
          <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-200 ease-in">Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
