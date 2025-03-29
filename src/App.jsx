import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Solutions from "../pages/Solutions";
import Upskilling from "../pages/Upskilling";
import UpskillDetails from "../pages/UpskillDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="upskilling" element={<Upskilling />} />
              <Route path="upskill-details" element={<UpskillDetails />} />
              <Route path="blog-details" element={<BlogDetails />} />
              <Route path="blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
