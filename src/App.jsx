import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import style from './App.module.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./routes/search";
import Wishlist from "./routes/wishlist";
import Home from "./routes/home";

import CourseView from "./routes/courseView";
import NavBar from "./components/navbar";
import { Container } from "react-bootstrap";
import Example from "./routes/example";
import { useSelector } from "react-redux";
import { selectStatus } from "./reducers/profileSlice";
import logo from "./CSUNorthridgelogo.svg";


function App() {
  const status = useSelector(selectStatus);

  return (
    <>
      <BrowserRouter>
        {!!status && <NavBar logo={logo} />}

        <Container className="pt-3 pb-3">
          <Routes>
            <Route path="/" element={<Home />} />
            {status !== "" && (
              <>
                <Route path="example" element={<Example />} />
                <Route path="search" element={<Search />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="courseView" element={<CourseView />} />
              </>
            )}
            <Route
              path="*"
              element={<h1 className="text-center">404 Not Found</h1>}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
