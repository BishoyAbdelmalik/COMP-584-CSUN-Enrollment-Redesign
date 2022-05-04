import { selectStatus } from "../reducers/profileSlice";
// import style from "./../App.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import Login from "../components/login";
import Search from "./search";
import { useEffect } from "react";
import { addGEClass } from "../reducers/classesSlice";
import { getGEClasses } from "../api/utils";

const Home = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(status==='logged-in'){
      getGEClasses().then(response =>  dispatch(addGEClass({ge:response})));
    }
  }, [status,dispatch])
  return (
    <>
      {status === ''
           ? (<Login/>)
           : (<Search/>)
          }
      
    </>
  );
};

export default Home;