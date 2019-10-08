# Server Side Rendering

## Summary

Server side rendering answers the question about how to present a website to someone with a slow internet connection or 2G wireless connection in middle America or rural China. The server renders html page and sends that to the user, so the user sees something rather than a loading icon or a blank page. While the user views the pre-rendered page, JavaScript is downloading in the background.

The more advanced server side rendering is incremental rendering. Instead of sending one big chunk of html and JavaScript, the server gives a smaller portion to render for the user to initially view. While the user is interacting with the parts of the first page, the server is continually rending smaller chunks of JavaScript and markup to the user.

## Server Side Rendering to Strings

On the backend an express server is created with Node.js. On the frontend, a ClientApp.js is created. Instead of using the render function from React DOM, the hydrate function is used. Whereas render deletes whatever markup is present and re-renders the whole page, hydrate just takes the markup in App and passes it to the server.

```
hydrate(<App />, document.getElementById("root"));
```

Hydrate passes the App to the server and the server sends the html and markup to the user.

```
app.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  res.end();
});
```
