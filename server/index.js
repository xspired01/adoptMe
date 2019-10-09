import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
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
  //immediately give the users one piece of webpage
  res.write(parts[0]);
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  //
  const stream = renderToNodeStream(reactMarkup);

  //pipe markup into response, don't end it when it's done
  stream.pipe(
    res,
    { end: false }
  );

  //when finished write other part of html and end connection
  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

console.log(`listening on ${PORT}`);
app.listen(PORT);
