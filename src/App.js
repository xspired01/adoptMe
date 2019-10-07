import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Sammy",
      animal: "dog",
      breed: "bulldog"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "cat",
      breed: "tabby"
    }),
    React.createElement(Pet, {
      name: "Hazel",
      animal: "dog",
      breed: "irish setter"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
