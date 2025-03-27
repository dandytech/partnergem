import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Solutions from "../pages/Solutions";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* main route */}
            <Route element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="home" element={<Home />} />
              <Route path="solutions" element={<Solutions />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
