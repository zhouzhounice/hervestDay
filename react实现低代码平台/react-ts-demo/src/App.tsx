import React from "react";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router";
import "./App.css";

function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>;
}

export default App;

// import React from "react";
// // import CountDemo from "./demo/Reducer/CountDemo";
// import TodoDemo from "./demo/Reducer/TodoDemo";
//
// function App() {
//   return <TodoDemo></TodoDemo>;
// }
//
// export default App;
