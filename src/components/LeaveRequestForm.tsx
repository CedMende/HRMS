import React, { useState } from "react";
import { Calendar, Upload, Info, AlertCircle } from "lucide-react";
interface LeaveBalance {
  type: string;
  used: number;
  total: number;
  color: string;
}
export const LeaveRequestForm = () => {
  const [selectedDates, setSelectedDates] = useState({
    start: "",
    end: ""
  });
  const [leaveType, setLeaveType] = useState("");
  const [reason, setReason] = useState("");
  const leaveBalances: LeaveBalance[] = [{
    type: "Annual Leave",
    used: 12,
    total: 24,
    color: "bg-blue-100"
  }, {
    type: "Sick Leave",
    used: 3,
    total: 14,
    color: "bg-orange-100"
  }, {
    type: "Personal Leave",
    used: 2,
    total: 7,
    color: "bg-purple-100"
  }];
  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-lg border p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Leave Request Form
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Leave Type
            </label>
            <select value={leaveType} onChange={e => setLeaveType(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select leave type</option>
              <option value="annual">Annual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="personal">Personal Leave</option>
              <option value="unpaid">Unpaid Leave</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <div className="relative">
                <input type="date" value={selectedDates.start} onChange={e => setSelectedDates(prev => ({
                ...prev,
                start: e.target.value
              }))} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <div className="relative">
                <input type="date" value={selectedDates.end} onChange={e => setSelectedDates(prev => ({
                ...prev,
                end: e.target.value
              }))} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Leave
            </label>
            <textarea value={reason} onChange={e => setReason(e.target.value)} rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Please provide a detailed reason for your leave request..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Supporting Documents (if any)
            </label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <Upload className="mx-auto text-gray-400 mb-2" size={24} />
              <p className="text-sm text-gray-500">
                Drag and drop files here, or click to select files
              </p>
              <input type="file" className="hidden" />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">
            Leave Balance
          </h3>
          <div className="space-y-4">
            {leaveBalances.map((balance, index) => <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{balance.type}</span>
                  <span className="text-gray-900">
                    {balance.used}/{balance.total} days
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className={`h-full rounded-full ${balance.color}`} style={{
                width: `${balance.used / balance.total * 100}%`
              }} />
                </div>
              </div>)}
          </div>
        </div>
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info size={20} className="text-gray-400" />
            <h3 className="text-sm font-semibold text-gray-800">
              Leave Policy
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex gap-2 text-sm">
              <AlertCircle size={16} className="text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                Requests must be submitted at least 3 days in advance
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <AlertCircle size={16} className="text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                Medical certificate required for sick leave &gt; 2 days
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <AlertCircle size={16} className="text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-gray-600">
                Annual leave requires supervisor approval
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};