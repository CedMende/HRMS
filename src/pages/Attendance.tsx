import React, { useState } from "react";
import { Search, Filter, Download, CalendarDays } from "lucide-react";
import { AttendanceList } from "../components/AttendanceList";
export const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState("today");
  const stats = [{
    label: "Present Today",
    value: "225",
    percent: "90.7%",
    color: "bg-green-100 text-green-600"
  }, {
    label: "Late Today",
    value: "12",
    percent: "4.8%",
    color: "bg-orange-100 text-orange-600"
  }, {
    label: "Absent Today",
    value: "8",
    percent: "3.2%",
    color: "bg-red-100 text-red-600"
  }, {
    label: "On Leave",
    value: "3",
    percent: "1.2%",
    color: "bg-blue-100 text-blue-600"
  }];
  return <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Attendance</h1>
          <p className="text-gray-600">
            Track employee attendance and time records
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Download size={20} />
            <span>Export</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <CalendarDays size={20} />
            <span>Mark Attendance</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => <div key={index} className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl font-semibold text-gray-800">
                {stat.value}
              </span>
              <span className={`text-sm px-2 py-1 rounded-full ${stat.color}`}>
                {stat.percent}
              </span>
            </div>
          </div>)}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="Search employees..." className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <select className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50" value={selectedDate} onChange={e => setSelectedDate(e.target.value)}>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
          </select>
        </div>
      </div>
      <AttendanceList />
    </div>;
};