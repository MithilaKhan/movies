const SingleTrending = ({ trending }) => {
  console.log(trending);
  return (
    <div>
      <div className="max-w-sm  overflow-hidden shadow-lg bg-gray-400 hover:bg-slate-50 text-white hover:text-black rounded-lg">
        <img
          className="w-full p-4 rounded-lg"
          src={
            trending.backdrop_path
              ? `https://image.tmdb.org/t/p/w300/${trending.backdrop_path}`
              : " undifined"
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {trending?.name || trending?.original_title}
          </div>
          <div className="flex gap-3 justify-between text-xl">
            <p>{trending?.media_type}</p>
            <p>{trending?.first_air_date || trending?.release_date} </p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2"></div>
      </div>
    </div>
  );
};

export default SingleTrending;
