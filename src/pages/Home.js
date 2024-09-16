import React, { useEffect, useState } from "react";
import Spinner from './Spinner'
import Product from '../components/Product'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData(params) {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data =  await result.json();
      setPosts(data);
    } catch (error) {
      console.log("Error Found");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div> 
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className=" grid md:grid-cols-3 sm:grid-cols-2  xs:grid-col-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-7 space-y-28  min-h-[80vh]">{posts.map((post) => (
            <Product key = {post.id} post ={post} />
        ))} </div>
      ) : (
        <div className="flex justify-center items-center  ">
          {" "}
          <p> No data found </p>{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
