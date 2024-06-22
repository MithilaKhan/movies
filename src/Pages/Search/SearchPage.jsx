import { Input, Tabs } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleTrending from "../../Component/SingleTrending/SingleTrending";
import CustomPagination from "../../Component/CustomPagination";
const { Search } = Input;
const SearchPage = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState();
  const [type, setType] = useState(0);
  console.log(type);

  const items = [
    {
      key: 0,
      label: "Search Movies ",
    },
    {
      key: 1,
      label: "Search Tv Series",
    },
  ];

  // `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
  //   process.env.REACT_APP_API_KEY
  // }&language=en-US&query=${searchText}&page=${page}&include_adult=false`

  const fetchSearchData = async (page, searchText, type) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=b3e9005b565d085ffd6c57b7d63fef73&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.data.results);
    console.log(content);
  };
  useEffect(() => {
    fetchSearchData(page, searchText, type);
  }, [page, searchText, type]);

  const onSearch = (value) => {
    console.log(value);
    setSearchText(value);
  };

  const onChange = (key) => {
    console.log(key);
    setType(key);
  };

  return (
    <div className=" py-14">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        variant="filled"
        style={{
          width: "100%",
          backgroundColor: "gray",
          color: "white",
          borderRadius: "10px",
          padding: "5px",
          marginBottom: "50px",
        }}
      />

      <div>
        <Tabs defaultValue={type} items={items} onChange={onChange} />
      </div>

      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-3 gap-y-8 mb-6">
        {content &&
          content.map((data) => (
            <div key={data.id}>
              <SingleTrending
                image={data.backdrop_path}
                name={data?.name}
                originalName={data?.original_title}
                media_type={type == 0 ? "Series" : "movie"}
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

export default SearchPage;
