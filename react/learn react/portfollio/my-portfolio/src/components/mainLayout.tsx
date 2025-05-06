import { Outlet } from "react-router-dom";

import Home from "../pages/home";

function MainLayout() {
  return (
    <div className="bg-[#0a192f]">
    
       <Home/>
        <Outlet />
     
    </div>
  );
}

export default MainLayout;
