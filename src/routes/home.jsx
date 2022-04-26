import { selectStatus } from "../reducers/profileSlice";
// import style from "./../App.module.scss";
import { useSelector } from 'react-redux';
import Login from "../components/login";
import Search from "./search";

const Home = () => {
  const status = useSelector(selectStatus);

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