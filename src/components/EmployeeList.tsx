import React from "react";
import { MoreVertical, Mail, Phone } from "lucide-react";
interface Employee {
  name: string;
  image: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  status: "active" | "on-leave" | "terminated";
  joinDate: string;
}
export const EmployeeList = () => {
  const employees: Employee[] = [{
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Senior Engineer",
    department: "Engineering",
    email: "john.doe@mps.com",
    phone: "+1 234 567 890",
    status: "active",
    joinDate: "Jan 15, 2023"
  }, {
    name: "Sarah Smith",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Project Manager",
    department: "Management",
    email: "sarah.smith@mps.com",
    phone: "+1 234 567 891",
    status: "active",
    joinDate: "Mar 20, 2023"
  }, {
    name: "Michael Johnson",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Site Supervisor",
    department: "Operations",
    email: "michael.j@mps.com",
    phone: "+1 234 567 892",
    status: "on-leave",
    joinDate: "Jun 5, 2023"
  }];
  const statusColors = {
    active: "bg-green-100 text-green-700",
    "on-leave": "bg-orange-100 text-orange-700",
    terminated: "bg-red-100 text-red-700"
  };
  return <div className="bg-white rounded-lg border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Employee
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Contact
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Department
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Join Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee, index) => <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={employee.image} alt={employee.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {employee.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {employee.position}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Mail size={16} />
                      {employee.email}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mt-1">
                      <Phone size={16} />
                      {employee.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {employee.department}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {employee.joinDate}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[employee.status]}`}>
                    {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};