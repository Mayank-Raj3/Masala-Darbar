// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "heading"
);
const heading1 = (
  <h1 id="title" key="h2">
    Namaste react
  </h1>
);
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h2"
//   },
//   "heading1"
// );
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);
// root.render(container);

//functional component
/*
  Name of component starts with capital letter  
 */
const Title = () => <h1>This is title </h1>;

const HeaderComponent = () => (
  <>
    // {} inside this we can write any javascrit {1 + 2 + 3} {Title()}
    <Title />
    <h1>Namste react Functional component </h1>;
  </>
);

// console.log()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
