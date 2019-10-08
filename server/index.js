import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3001;

//reads output html to use in server side rendering
const html = fs.readFileSync("dist/index.html").toString();

//splitting the index.html on "not rendered string" in the div with
//id="root"
const parts = html.split("not rendered");

const app = express();

//statically server everything in the dist directory
app.use("/dist", express.static("dist"));

app.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  //first part of markup + rendered HTML + second part of markup
  res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  res.end();
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
