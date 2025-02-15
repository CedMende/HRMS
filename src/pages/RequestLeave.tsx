import React from "react";
import { ArrowLeft } from "lucide-react";
import { LeaveRequestForm } from "../components/LeaveRequestForm";
export const RequestLeave = () => {
  return <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Request Leave
          </h1>
          <p className="text-gray-600">Submit a new leave request</p>
        </div>
      </div>
      <LeaveRequestForm />
    </div>;
};