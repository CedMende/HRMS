import React, { useState } from "react";
import { Search, Plus, Filter } from "lucide-react";
import { ProjectList } from "../components/ProjectList";
export const Projects = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  return <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Projects</h1>
          <p className="text-gray-600">
            Manage and track your company projects
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          <span>New Project</span>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="Search projects..." className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <select className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
            <option value="all">All Projects</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[{
        label: "Total Projects",
        value: "24",
        color: "bg-blue-100 text-blue-600"
      }, {
        label: "Ongoing Projects",
        value: "12",
        color: "bg-green-100 text-green-600"
      }, {
        label: "Completed Projects",
        value: "8",
        color: "bg-purple-100 text-purple-600"
      }].map((stat, index) => <div key={index} className="bg-white p-4 rounded-lg border">
            <p className="text-gray-600">{stat.label}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className={`text-2xl font-semibold ${stat.color.split(" ")[1]}`}>
                {stat.value}
              </span>
              <span className={`text-sm px-2 py-1 rounded-full ${stat.color}`}>
                {index === 0 ? "Total" : index === 1 ? "In Progress" : "Done"}
              </span>
            </div>
          </div>)}
      </div>
      <ProjectList />
    </div>;
};