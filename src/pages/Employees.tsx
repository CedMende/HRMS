import React, { useState } from "react";
import { Search, Plus, Filter, Download } from "lucide-react";
import { EmployeeList } from "../components/EmployeeList";
export const Employees = () => {
  const [filterDepartment, setFilterDepartment] = useState("all");
  const stats = [{
    label: "Total Employees",
    value: "248",
    change: "+12",
    changeType: "increase"
  }, {
    label: "Engineering",
    value: "86",
    percent: "34.6%"
  }, {
    label: "Operations",
    value: "94",
    percent: "37.9%"
  }, {
    label: "Management",
    value: "68",
    percent: "27.5%"
  }];
  return <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Employees</h1>
          <p className="text-gray-600">Manage your employee information</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Download size={20} />
            <span>Export</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            <span>Add Employee</span>
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
              {stat.change && <span className={`text-sm px-2 py-1 rounded-full ${stat.changeType === "increase" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                  {stat.change}
                </span>}
              {stat.percent && <span className="text-sm text-gray-500">{stat.percent}</span>}
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
          <select className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50" value={filterDepartment} onChange={e => setFilterDepartment(e.target.value)}>
            <option value="all">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="operations">Operations</option>
            <option value="management">Management</option>
          </select>
        </div>
      </div>
      <EmployeeList />
    </div>;
};