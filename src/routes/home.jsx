import { selectStatus, selectMainSubject } from "../reducers/profileSlice";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/login";
import Search from "./search";
import Course from "./course";

const Home = () => {
  const status = useSelector(selectStatus);
  const mainSubject = useSelector(selectMainSubject);

  return <>{!!status ? !!mainSubject ? <Search /> : <Course /> : <Login />}</>;
};

export default Home;
