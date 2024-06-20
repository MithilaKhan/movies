import axios from "axios";
import { useEffect, useState } from "react";
import SingleTrending from "../../Component/SingleTrending/SingleTrending";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const getTrendingData = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=b3e9005b565d085ffd6c57b7d63fef73"
    );
    setTrending(data.data.results);
  };
  useEffect(() => {
    getTrendingData();
  }, []);
  return (
    <div className="contrainer pb-10 font-[Montserrat] ">
      <h1 className=" text-4xl font-semibold font-[Montserrat] text-center text-white py-8 ">
        Trending
      </h1>
      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-3 gap-y-8">
        {trending &&
          trending.map((data) => (
            <div key={data.id}>
              <SingleTrending trending={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;
