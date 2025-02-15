import React, { useState } from "react";
import { Search, Filter, Plus, PieChart } from "lucide-react";
import { LeaveList } from "../components/LeaveList";
export const Leave = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const stats = [{
    label: "Total Leave Days",
    value: "180",
    subtext: "This month",
    color: "bg-blue-100 text-blue-600"
  }, {
    label: "Pending Requests",
    value: "12",
    subtext: "Needs review",
    color: "bg-yellow-100 text-yellow-600"
  }, {
    label: "Approved Leaves",
    value: "45",
    subtext: "This month",
    color: "bg-green-100 text-green-600"
  }, {
    label: "Leave Balance",
    value: "15",
    subtext: "Average/person",
    color: "bg-purple-100 text-purple-600"
  }];
  const leaveTypes = [{
    type: "Sick Leave",
    value: "35%",
    color: "bg-orange-100"
  }, {
    type: "Vacation",
    value: "40%",
    color: "bg-blue-100"
  }, {
    type: "Personal",
    value: "15%",
    color: "bg-purple-100"
  }, {
    type: "Other",
    value: "10%",
    color: "bg-gray-100"
  }];
  return <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Leave Management
          </h1>
          <p className="text-gray-600">
            Track and manage employee leave requests
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          <span>Apply Leave</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => <div key={index} className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-gray-800">
                {stat.value}
              </span>
              <span className={`ml-2 text-sm px-2 py-1 rounded-full ${stat.color}`}>
                {stat.subtext}
              </span>
            </div>
          </div>)}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="Search leave requests..." className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <select className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="lg:col-span-3">
          <LeaveList />
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-2 mb-4">
            <PieChart size={20} className="text-gray-400" />
            <h3 className="font-semibold text-gray-800">Leave Distribution</h3>
          </div>
          <div className="space-y-4">
            {leaveTypes.map((type, index) => <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{type.type}</span>
                  <span className="text-gray-900 font-medium">
                    {type.value}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className={`h-full rounded-full ${type.color}`} style={{
                width: type.value
              }}></div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};