import { selectStatus } from "../reducers/profileSlice";
// import style from "./../App.module.scss";
import { useSelector } from 'react-redux';
import Login from "../components/login";

const Home = () => {
  const status = useSelector(selectStatus);

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