import React from "react";
import "./App.css";
import PizzaPagination from "./PizzaPagination";

function App() {
  return (
    <div className="App">
      <span aria-label="pizza emoji" role="img">
        🍕
      </span>
      <h1>Pizza Pagination Coming Soon</h1>
      <PizzaPagination
        currentPage={1}
        numberOfPages={7}
        onPageChange={() => {}}
      />
    </div>
  );
}

export default App;
