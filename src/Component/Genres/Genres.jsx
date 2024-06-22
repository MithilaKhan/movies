import { Tag } from "antd";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) => {
  const fetchGenres = async (type) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=b3e9005b565d085ffd6c57b7d63fef73&language=en-US`
    );
    setGenres(data.data.genres);
    console.log(genres);
  };
  useEffect(() => {
    fetchGenres(type);
  }, [type]);

  const handleDelete = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((select) => select.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  return (
    <div className=" mb-5">
      {selectedGenres?.map((da) => (
        <Tag
          key={da.id}
          closeIcon
          onClose={() => handleDelete(da)}
          className=" p-2 text-sm  "
        >
          {da.name}
        </Tag>
      ))}

      {genres?.map((d) => (
        <Tag
          key={d.id}
          className=" p-2 text-sm  cursor-pointer"
          onClick={() => handleAdd(d)}
        >
          {d.name}
        </Tag>
      ))}
    </div>
  );
};

export default Genres;
