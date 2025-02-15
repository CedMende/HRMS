import React from "react";
import { BiometricAttendanceMonitor } from "../components/BiometricAttendanceMonitor";
import { Shield, Download } from "lucide-react";
export const BiometricAttendance = () => {
  return <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Biometric Attendance Monitor
          </h1>
          <p className="text-gray-600">
            Monitor and manage employee attendance verification
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Download size={20} />
            <span>Export Log</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Shield size={20} />
            <span>Access Control</span>
          </button>
        </div>
      </div>
      <BiometricAttendanceMonitor />
    </div>;
};