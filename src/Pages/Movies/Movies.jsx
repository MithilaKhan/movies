import axios from "axios";
import { useEffect, useState } from "react";
import SingleTrending from "../../Component/SingleTrending/SingleTrending";
import CustomPagination from "../../Component/CustomPagination";
import Genres from "../../Component/Genres/Genres";
import useGenre from "../../hooks/useGenre";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const genreforURL = useGenre(selectedGenres);

  const fetchAllMovies = async (page, genreforURL) => {
    const moviesData = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=b3e9005b565d085ffd6c57b7d63fef73&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setMovies(moviesData.data.results);
    console.log(movies);
  };

  useEffect(() => {
    fetchAllMovies(page, genreforURL);
  }, [page, genreforURL]);

  return (
    <div>
      <h1 className=" text-4xl font-medium  font-[Montserrat] text-center text-white py-8 ">
        All Movies
      </h1>

      <Genres
        type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />

      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-3 gap-y-8 mb-6">
        {movies &&
          movies.map((data) => (
            <div key={data.id}>
              <SingleTrending
                image={data.backdrop_path}
                name={data?.name}
                originalName={data?.original_title}
                mediaType="movie"
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

export default Movies;
