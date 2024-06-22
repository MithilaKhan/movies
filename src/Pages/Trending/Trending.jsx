import axios from "axios";
import { useEffect, useState } from "react";
import SingleTrending from "../../Component/SingleTrending/SingleTrending";
import "@fontsource/montserrat";
import CustomPagination from "../../Component/CustomPagination";
const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  const getTrendingData = async (page) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=b3e9005b565d085ffd6c57b7d63fef73&page=${page}`
    );
    setTrending(data.data.results);
    console.log(trending);
  };
  useEffect(() => {
    getTrendingData(page);
  }, [page]);

  return (
    <div className="contrainer pb-10 font-[Montserrat] ">
      <h1 className=" text-4xl font-medium  font-[Montserrat] text-center text-white py-8 ">
        Trending Today
      </h1>
      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-3 gap-y-8 mb-6">
        {trending &&
          trending.map((data) => (
            <div key={data.id}>
              <SingleTrending
                image={data.backdrop_path}
                name={data?.name}
                originalName={data?.original_title}
                mediaType={data?.media_type}
                firstDate={data?.first_air_date}
                relaseDate={data?.release_date}
                description={data?.overview}
                id={data?.id}
              />
            </div>
          ))}
      </div>

      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
