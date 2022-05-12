import React, { useEffect } from "react";
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
import { signin } from "./actions/auth";
import { auth } from "./firebase";
import { getClasses, getGEClasses } from "./api/utils";
import { addGEClass, addMainSubjectClass } from "./reducers/classesSlice";

function App() {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const mainSubject = useSelector(selectMainSubject);
  useEffect(() => {
    if (status === "logged-in") {
      getGEClasses().then((response) => dispatch(addGEClass({ ge: response })));
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "logged-in" && !!mainSubject) {
      getClasses(mainSubject).then((response) =>
        dispatch(addMainSubjectClass({ mainSubject: response }))
      );
    }
  }, [mainSubject, status, dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        // user is logged in, send the user's details to redux, store the current user in the state
        signin(dispatch, currentuser);
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="d-flex flex-column vh-100">
      <div>
        <BrowserRouter>
          {!!status && <NavBar logo={logo} />}

          <Container className="pt-3 pb-3">
            <Routes>
              <Route path="/" element={<Home />} />
              {status !== "" && (
                <>
                  <Route path="/example" element={<Example />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/courseView" element={<CourseView />} />
                  <Route path="/class/:id" element={<Class />} />
                </>
              )}
              <Route
                path="*"
                element={<h1 className="text-center">404 Not Found</h1>}
              />
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
      {status === "logged-in" && <Footer />}
    </div>
  );
}

export default App;
