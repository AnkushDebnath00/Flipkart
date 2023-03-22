import React from "react";

// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider className="h-[2000px]">
      <Header />
      <Home />
    </DataProvider>
  );
}

export default App;
