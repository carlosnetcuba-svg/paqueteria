
import Navbar from "@/Layout/AdminNavbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    
  return (
    <div>
      <Navbar />             
      <main>
        <Outlet />           
      </main>
    </div>
  );
}