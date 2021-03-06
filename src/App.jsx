import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./routes/search";
import Wishlist from "./routes/wishlist";
import Home from "./routes/home";

import NavBar from "./components/navbar";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  selectMainSubject,
  selectStatus,
} from "./reducers/profileSlice";
import logo from "./CSUNorthridgelogo.svg";
import { Footer } from "./components/footer";
import { Class } from "./routes/class";
import { onAuthStateChanged } from "firebase/auth";
import { signin, getUserInfo } from "./actions/auth";
import { auth } from "./firebase";
import { getRidOfDuplicateClasses, getGEClasses, getAllCourses } from "./api/utils";
import { addAllCourses, addGEClass, addMainSubjectClass, selectAllCourses } from "./reducers/classesSlice";
import Delay from "./components/delay";
import { SignUpRoute } from "./routes/SignUpRoute";

function App() {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const mainSubject = useSelector(selectMainSubject);
  const allCourses = useSelector(selectAllCourses);
  useEffect(() => {
    if (status === "logged-in") {
      getGEClasses().then((response) => dispatch(addGEClass({ ge: response })));
    }
  }, [status, dispatch]);
  
  useEffect(()=>{
    if(allCourses.length===0){
      getAllCourses().then(response=> dispatch(addAllCourses({ allCourses: response })));
    }
  },[allCourses,dispatch]);

  useEffect(() => {
    if (status === "logged-in" && mainSubject) {
      getRidOfDuplicateClasses(mainSubject).then((response) =>
        dispatch(addMainSubjectClass({ mainSubject: response }))
      );
    }
  }, [mainSubject, status, dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        // user is logged in, send the user's details to redux, store the current user in the state
        signin(dispatch, currentuser);
        dispatch(getUserInfo(currentuser.uid));
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);


  return (
    <Delay>
      <div className="d-flex flex-column vh-100">
        <div>
          <BrowserRouter>
            {!!status && mainSubject && <NavBar logo={logo} />}

            <Container className="pt-3 pb-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUpRoute />} />
                {status !== "" && (
                  <>
                    <Route path="/search" element={<Search />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/class/:id" element={<Class />} />
                  </>
                )}
                <Route
                  path="*"
                  element={
                    <Delay>
                      <h1 className="text-center">404 Not Found</h1>
                    </Delay>
                  }
                />
              </Routes>
            </Container>
          </BrowserRouter>
        </div>
        {status === "logged-in" && <Footer />}
      </div>
    </Delay>
  );
}

export default App;
