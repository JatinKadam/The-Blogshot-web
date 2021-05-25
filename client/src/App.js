import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Blogs from "./component/blogs/Blogs";
import Create from "./component/create/Create";
import { getBlog } from "./actions/blog";

import Navigation from "./component/navigation/Navigation";

import "./styles.css";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <div className="head"></div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Blogs} />
          <Route path="/create" component={Create} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
