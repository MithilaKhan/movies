import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Component/Banner/Banner";
import SimpleBottomNavigation from "./Component/BottomManu";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/SearchPage";
import "@fontsource/montserrat";
function App() {
  return (
    <BrowserRouter>
      <div className=" w-full">
        <Banner />
        <div className="  bg-slate-500  w-full px-28">
          <Routes>
            <Route path="/" Component={Trending} exact />
            <Route path="/movies" Component={Movies} />
            <Route path="/series" Component={Series} />
            <Route path="/search" Component={Search} />
          </Routes>
        </div>
        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
