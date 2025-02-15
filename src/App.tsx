import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { DashboardStats } from "./components/DashboardStats";
import { Projects } from "./pages/Projects";
import { Employees } from "./pages/Employees";
import { Attendance } from "./pages/Attendance";
import { Leave } from "./pages/Leave";
import { RequestLeave } from "./pages/RequestLeave";
import { Login } from "./pages/Login";
import { Bell, Search } from "lucide-react";
import { BiometricAttendance } from "./pages/BiometricAttendance";
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  if (!isAuthenticated) {
    return <Login />;
  }
  return <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} onMenuClick={page => setCurrentPage(page)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-gray-700">John Doe</p>
                  <p className="text-xs text-gray-500">HR Manager</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          {currentPage === "dashboard" && <BiometricAttendance />}
          {currentPage === "projects" && <Projects />}
          {currentPage === "employees" && <Employees />}
          {currentPage === "attendance" && <Attendance />}
          {currentPage === "leave" && <Leave />}
          {currentPage === "request-leave" && <RequestLeave />}
        </div>
      </div>
    </div>;
}