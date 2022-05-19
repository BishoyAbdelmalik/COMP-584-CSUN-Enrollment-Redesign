import { selectStatus, selectMainSubject } from "../reducers/profileSlice";
import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/loginSignup/login";
import Search from "./search";
import SelectMainSubject from "../components/loginSignup/selectMainSubject";


const Home = () => {
  const status = useSelector(selectStatus);
  const mainSubject = useSelector(selectMainSubject);

  return <>{!!status ? !!mainSubject ? <Search /> : <SelectMainSubject /> : <Login />}</>;
};

export default Home;
