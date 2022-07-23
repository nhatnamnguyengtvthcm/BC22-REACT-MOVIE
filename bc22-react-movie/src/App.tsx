import React from "react";
import "App.css";
import Home from "pages/Home";
import { MainTemplate } from "template/MainTemplate";
import { GlobalStyle } from "GlobalStyle";
import { Route, Routes } from "react-router-dom";
import Movie from "pages/Movie";
import Login from "pages/Login";
import DemoGrid from "components/TailWinComponent/DemoGrid";
import PaddingMarginDemo from "components/TailWinComponent/PaddingMarginDemo";
import WidthHeightDemo from "components/TailWinComponent/WidthHeightDemo";
import FlexDemo from "components/TailWinComponent/FlexDemo";
import JoinDemo from "components/Lodash/JoinDemo";
import LastFirstLodash from "components/Lodash/LastFirstLodash";
import ChunkLodash from "components/Lodash/ChunkLodash";
import FillLodash from "components/Lodash/FillLodash";
import SortLodash from "components/Lodash/SortLodash";
import UniqLodash from "components/Lodash/UniqLodash";
import FlattenLodash from "components/Lodash/FlattenLodash";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/demogrid" element={<DemoGrid />} />
        <Route path="/demomargin" element={<PaddingMarginDemo />} />
        <Route path="/withheight" element={<WidthHeightDemo />} />
        <Route path="/flex" element={<FlexDemo />} />
        <Route path="/join" element={<JoinDemo />} />
        <Route path="/firstlast" element={<LastFirstLodash />} />
        <Route path="/chunkLodash" element={<ChunkLodash />} />
        <Route path="/fillLodash" element={<FillLodash />} />
        <Route path="/sortLodash" element={<SortLodash />} />
        <Route path="/uniqLodash" element={<UniqLodash />} />
        <Route path="/flaternLodash" element={<FlattenLodash />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
