import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <div>
      <TopBar />
      </div>
      <div>
      <Sidebar />
      </div>
      
    </div>
  );
};

export default HomePage;
