import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

//hydrate is a special function, similar to render
//except, it just takes over from what markup is there
//render erases everything and re-renders the webpage.
hydrate(<App />, document.getElementById("root"));

//go thru entire app, ensure there is no reference to document
//for the first render. If tried in node will get error.
