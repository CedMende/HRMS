import React, { useState } from "react";
import { Fingerprint, Scan, CheckCircle2, XCircle, AlertCircle, Camera, RefreshCw, UserCheck, Clock, Shield } from "lucide-react";
export const BiometricAttendanceMonitor = () => {
  const [activeMethod, setActiveMethod] = useState<"fingerprint" | "facial">("fingerprint");
  const [systemStatus, setSystemStatus] = useState("online");
  const recentVerifications = [{
    employee: {
      name: "Sarah Smith",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Project Manager"
    },
    time: "09:02 AM",
    type: "check-in",
    status: "success",
    method: "fingerprint"
  }, {
    employee: {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Senior Engineer"
    },
    time: "09:00 AM",
    type: "check-in",
    status: "success",
    method: "facial"
  }, {
    employee: {
      name: "Michael Johnson",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Site Supervisor"
    },
    time: "08:55 AM",
    type: "check-in",
    status: "failed",
    method: "fingerprint"
  }];
  const statusColors = {
    success: "text-green-600",
    failed: "text-red-600",
    pending: "text-yellow-600"
  };
  const methodIcons = {
    fingerprint: <Fingerprint size={16} />,
    facial: <Camera size={16} />
  };
  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Monitoring Panel */}
      <div className="lg:col-span-2 space-y-6">
        {/* Biometric Control Panel */}
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Biometric Attendance Control
            </h2>
            <div className="flex items-center gap-2">
              <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${systemStatus === "online" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                <Shield size={16} />
                System {systemStatus}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setActiveMethod("fingerprint")} className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${activeMethod === "fingerprint" ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 hover:border-blue-600 hover:bg-blue-50"}`}>
              <Fingerprint size={24} />
              <span className="font-medium">Fingerprint Scanner</span>
            </button>
            <button onClick={() => setActiveMethod("facial")} className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-colors ${activeMethod === "facial" ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 hover:border-blue-600 hover:bg-blue-50"}`}>
              <Camera size={24} />
              <span className="font-medium">Facial Recognition</span>
            </button>
          </div>
          <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-dashed">
            <div className="flex items-center justify-center">
              {activeMethod === "fingerprint" ? <div className="text-center">
                  <Fingerprint size={48} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Waiting for fingerprint scan...
                  </p>
                </div> : <div className="text-center">
                  <Camera size={48} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Waiting for facial recognition...
                  </p>
                </div>}
            </div>
          </div>
        </div>
        {/* Recent Verifications */}
        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-800">
                Recent Verifications
              </h3>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <RefreshCw size={16} />
                Refresh
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {recentVerifications.map((verification, index) => <div key={index} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={verification.employee.image} alt={verification.employee.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {verification.employee.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {verification.employee.position}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {verification.time}
                      </div>
                      <div className="text-sm text-gray-500">
                        {verification.type}
                      </div>
                    </div>
                    <div className={statusColors[verification.status]}>
                      {verification.status === "success" ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Stats and Info Panel */}
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">
            Today's Overview
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="text-green-600" size={20} />
                <span className="text-gray-600">Present</span>
              </div>
              <span className="font-semibold text-gray-900">45/48</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="text-yellow-600" size={20} />
                <span className="text-gray-600">Late Arrivals</span>
              </div>
              <span className="font-semibold text-gray-900">3</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="text-red-600" size={20} />
                <span className="text-gray-600">Pending Verification</span>
              </div>
              <span className="font-semibold text-gray-900">2</span>
            </div>
          </div>
        </div>
        {/* System Status */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">
            System Status
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Fingerprint Scanner</span>
                <span className="text-green-600 font-medium">Online</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-full rounded-full bg-green-100"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Facial Recognition</span>
                <span className="text-green-600 font-medium">Online</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-full rounded-full bg-green-100"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Database Sync</span>
                <span className="text-green-600 font-medium">Up to date</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-full rounded-full bg-green-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};