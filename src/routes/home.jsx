import { selectStatus } from "../reducers/profileSlice";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/login";
import Search from "./search";
import Delay from "../components/delay";


const Home = () => {
  const status = useSelector(selectStatus);

  return <><Delay>{!status ? <Login /> : <Search />}</Delay></>;
};

export default Home;
