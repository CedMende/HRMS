import React from "react";
import { Calendar, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
interface LeaveRequest {
  employee: {
    name: string;
    image: string;
    position: string;
  };
  leaveType: "sick" | "vacation" | "personal" | "other";
  startDate: string;
  endDate: string;
  duration: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
}
export const LeaveList = () => {
  const leaveRequests: LeaveRequest[] = [{
    employee: {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Senior Engineer"
    },
    leaveType: "vacation",
    startDate: "2024-02-01",
    endDate: "2024-02-07",
    duration: "7 days",
    reason: "Annual family vacation",
    status: "approved"
  }, {
    employee: {
      name: "Sarah Smith",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Project Manager"
    },
    leaveType: "sick",
    startDate: "2024-01-25",
    endDate: "2024-01-26",
    duration: "2 days",
    reason: "Medical appointment",
    status: "pending"
  }, {
    employee: {
      name: "Michael Johnson",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Site Supervisor"
    },
    leaveType: "personal",
    startDate: "2024-01-20",
    endDate: "2024-01-20",
    duration: "1 day",
    reason: "Family event",
    status: "rejected"
  }];
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700"
  };
  const leaveTypeStyles = {
    sick: "bg-orange-100 text-orange-700",
    vacation: "bg-blue-100 text-blue-700",
    personal: "bg-purple-100 text-purple-700",
    other: "bg-gray-100 text-gray-700"
  };
  const StatusIcon = ({
    status
  }: {
    status: LeaveRequest["status"];
  }) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 size={16} className="text-green-600" />;
      case "rejected":
        return <XCircle size={16} className="text-red-600" />;
      default:
        return <Clock size={16} className="text-yellow-600" />;
    }
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
                Leave Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Duration
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Reason
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
            {leaveRequests.map((request, index) => <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={request.employee.image} alt={request.employee.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {request.employee.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {request.employee.position}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${leaveTypeStyles[request.leaveType]}`}>
                    {request.leaveType.charAt(0).toUpperCase() + request.leaveType.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-400" />
                      <span>
                        {request.startDate} - {request.endDate}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {request.duration}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {request.reason}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <StatusIcon status={request.status} />
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[request.status]}`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {request.status === "pending" && <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded">
                        Approve
                      </button>
                      <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
                        Reject
                      </button>
                    </div>}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};