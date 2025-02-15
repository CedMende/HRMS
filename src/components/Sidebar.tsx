import React from "react";
import { LayoutDashboard, Users, Briefcase, Clock, Calendar, Settings, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
  onMenuClick: (page: string) => void;
}
export const Sidebar = ({
  collapsed,
  toggleSidebar,
  onMenuClick
}: SidebarProps) => {
  const menuItems = [{
    icon: <LayoutDashboard size={20} />,
    label: "Dashboard",
    id: "dashboard"
  }, {
    icon: <Briefcase size={20} />,
    label: "Projects",
    id: "projects"
  }, {
    icon: <Users size={20} />,
    label: "Employees",
    id: "employees"
  }, {
    icon: <Clock size={20} />,
    label: "Attendance",
    id: "attendance"
  }, {
    icon: <Calendar size={20} />,
    label: "Leave",
    id: "leave"
  }, {
    icon: <Settings size={20} />,
    label: "Settings",
    id: "settings"
  }];
  return <div className="relative flex-shrink-0">
      <div className={`h-screen bg-white border-r transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
        <div className="flex items-center h-16 px-4 border-b">
          <div className="flex items-center gap-3 overflow-hidden">
            <Building2 className="text-blue-600 flex-shrink-0" size={28} />
            <span className={`font-bold text-xl text-gray-800 whitespace-nowrap transition-opacity duration-300 ${collapsed ? "opacity-0" : "opacity-100"}`}>
              MPS HRMS
            </span>
          </div>
        </div>
        <div className="absolute -right-3 top-14 z-50">
          <button onClick={toggleSidebar} className="flex items-center justify-center w-6 h-6 rounded-full border bg-white shadow-sm hover:bg-gray-100 transition-colors">
            {collapsed ? <ChevronRight size={14} className="text-gray-600" /> : <ChevronLeft size={14} className="text-gray-600" />}
          </button>
        </div>
        <div className="p-3">
          {menuItems.map((item, index) => <div key={index} className="flex items-center gap-3 p-3 cursor-pointer rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => onMenuClick(item.id)}>
              <div className="flex-shrink-0">{item.icon}</div>
              <span className={`whitespace-nowrap transition-opacity duration-300 ${collapsed ? "opacity-0 w-0" : "opacity-100"}`}>
                {item.label}
              </span>
            </div>)}
        </div>
      </div>
    </div>;
};