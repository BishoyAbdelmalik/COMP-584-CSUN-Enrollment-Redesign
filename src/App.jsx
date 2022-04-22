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

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="example" element={<Example />} />
            <Route path="search" element={<Search />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="courseView" element={<CourseView />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
