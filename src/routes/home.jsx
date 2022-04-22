import React from "react";
import { selectStatus } from "../reducers/profileSlice";
import style from "./../App.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import Login from "../components/login";

const Home = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  // console.log();

  return (
    <>
      {status === ''
           ? (<Login/>)
           : (<h1>Hello</h1>)
          }
      
    </>
  );
};

export default Home;