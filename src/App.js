import React, { useState } from "react";
import "./App.css";
import PizzaPagination from "./PizzaPagination";

function App() {
  const [currentPage, setCurrentPage] = useState(5);
  return (
    <div className="App">
      <span aria-label="pizza emoji" role="img">
        🍕
      </span>
      <h1>Pizza Pagination Coming Soon</h1>
      <PizzaPagination
        currentPage={currentPage}
        numberOfPages={10}
        onPageChange={e => setCurrentPage(parseInt(e.target.value))}
      />
    </div>
  );
}

export default App;
