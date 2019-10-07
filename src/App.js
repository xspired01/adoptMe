const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Sammy"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Bulldog"),
    ])
};


const App = () => {
    return React.createElement(
        "div",
        { id: "something-important"},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));