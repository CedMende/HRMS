import React from "react";
import { Clock, AlertCircle } from "lucide-react";
interface AttendanceRecord {
  employee: {
    name: string;
    image: string;
    position: string;
  };
  date: string;
  checkIn: string;
  checkOut: string;
  duration: string;
  status: "present" | "late" | "absent" | "leave";
  note?: string;
}
export const AttendanceList = () => {
  const attendanceRecords: AttendanceRecord[] = [{
    employee: {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Senior Engineer"
    },
    date: "2024-01-15",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    duration: "9h 0m",
    status: "present"
  }, {
    employee: {
      name: "Sarah Smith",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Project Manager"
    },
    date: "2024-01-15",
    checkIn: "09:30 AM",
    checkOut: "06:30 PM",
    duration: "9h 0m",
    status: "late",
    note: "Traffic delay"
  }, {
    employee: {
      name: "Michael Johnson",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Site Supervisor"
    },
    date: "2024-01-15",
    checkIn: "--:--",
    checkOut: "--:--",
    duration: "--:--",
    status: "absent"
  }];
  const statusStyles = {
    present: "bg-green-100 text-green-700",
    late: "bg-orange-100 text-orange-700",
    absent: "bg-red-100 text-red-700",
    leave: "bg-blue-100 text-blue-700"
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
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Check In
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Check Out
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Duration
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {attendanceRecords.map((record, index) => <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={record.employee.image} alt={record.employee.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {record.employee.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {record.employee.position}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {record.date}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-900">
                      {record.checkIn}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-900">
                      {record.checkOut}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {record.duration}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[record.status]}`}>
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                    {record.note && <AlertCircle size={16} className="text-gray-400" title={record.note} />}
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};