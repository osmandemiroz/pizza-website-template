import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Homepage = React.lazy(() => import("pages/Homepage"));
const Orderonline = React.lazy(() => import("pages/Orderonline"));
const Contact = React.lazy(() => import("pages/Contact"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Menu = React.lazy(() => import("pages/Menu"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orderonline" element={<Orderonline />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
