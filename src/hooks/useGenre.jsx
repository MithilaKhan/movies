const useGenre = (selectedGenres) => {
  console.log(selectedGenres);
  if (selectedGenres?.length < 1) return "";
  const genresId = selectedGenres?.map((g) => g.id);
  console.log(genresId);
  return genresId?.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
