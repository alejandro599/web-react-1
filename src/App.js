import React, { Suspense, lazy } from "react";
import Lazy from "./components/Lazy";
import Navbar from "./components/Navbar";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*
import AboutUs from "./components/pages/AboutUs";
import Bloques from "./components/pages/Bloques";
import SignUp from "./components/pages/SignUp";
*/
import ScrollToTop from "./components/ScrollToTop";

const Inicio = lazy(() => import("./components/pages/Inicio"));
const Bloques = lazy(() => import("./components/pages/Bloques"));
const SignUp = lazy(() => import("./components/pages/SignUp"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Suspense fallback={<Lazy />}>
            <Route path="/" exact component={Inicio} />

            <Route path="/about-us" component={AboutUs} />
            <Route path="/bloques" component={Bloques} />
            <Route path="/sign-up" component={SignUp} />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}

export default App;
