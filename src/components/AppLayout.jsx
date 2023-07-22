import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
