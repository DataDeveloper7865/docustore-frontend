import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import MyImages from '../components/images/MyImages';
import UploadImage from '../components/images/UploadImage';
import EditImage from '../components/images/EditImage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/my-images"><MyImages /></Route>
      <Route exact path="/upload-image"><UploadImage /></Route>
      <Route exact path="/edit-image"><EditImage /></Route>
      <Route exact path="/"><Home /></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;