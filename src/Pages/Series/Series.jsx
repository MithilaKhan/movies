import axios from "axios";
import { useEffect, useState } from "react";
import SingleTrending from "../../Component/SingleTrending/SingleTrending";
import CustomPagination from "../../Component/CustomPagination";
import Genres from "../../Component/Genres/Genres";
import useGenre from "../../hooks/useGenre";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchSeries = async (page, genreforURL) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=b3e9005b565d085ffd6c57b7d63fef73&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setSeries(data.data.results);
  };

  useEffect(() => {
    fetchSeries(page, genreforURL);
  }, [page, genreforURL]);

  return (
    <div>
      <h1 className=" text-4xl font-medium  font-[Montserrat] text-center text-white py-8 ">
        Discover Series
      </h1>
      <Genres
        type="tv"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />

      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-3 gap-y-8 mb-6">
        {series &&
          series.map((data) => (
            <div key={data.id}>
              <SingleTrending
                image={data.backdrop_path}
                name={data?.name}
                originalName={data?.original_title}
                mediaType="series"
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

export default Series;
