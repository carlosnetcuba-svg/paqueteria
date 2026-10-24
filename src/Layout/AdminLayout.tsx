
import Navbar from "@/Layout/AdminNavbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    
  return (
    <div>
      <Navbar />             
      <main className=' p-4 sm:p-10 '>
        <Outlet />           
      </main>
    </div>
  );
}

