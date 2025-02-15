import React from "react";
import { Users, Clock, CalendarCheck, Briefcase } from "lucide-react";
export const DashboardStats = () => {
  const stats = [{
    icon: <Users className="text-blue-600" size={24} />,
    label: "Total Employees",
    value: "248"
  }, {
    icon: <Clock className="text-green-600" size={24} />,
    label: "Present Today",
    value: "225"
  }, {
    icon: <CalendarCheck className="text-orange-600" size={24} />,
    label: "On Leave",
    value: "12"
  }, {
    icon: <Briefcase className="text-purple-600" size={24} />,
    label: "Active Projects",
    value: "15"
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => <div key={index} className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-800">
                {stat.value}
              </p>
            </div>
          </div>
        </div>)}
    </div>;
};