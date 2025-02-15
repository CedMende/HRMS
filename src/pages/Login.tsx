import React, { useState } from "react";
import { Building2, Mail, Lock, Loader2 } from "lucide-react";
export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };
  return <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <Building2 className="text-blue-600" size={40} />
            <span className="text-2xl font-bold text-gray-900">MPS HRMS</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Welcome back! Please enter your credentials.
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="block w-full rounded-lg border pl-10 pr-3 py-2 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input id="password" name="password" type="password" autoComplete="current-password" required value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} className="block w-full rounded-lg border pl-10 pr-3 py-2 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" checked={formData.rememberMe} onChange={e => setFormData({
                ...formData,
                rememberMe: e.target.checked
              })} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm leading-6">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" disabled={isLoading} className="flex w-full justify-center items-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70">
                {isLoading ? <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Signing in...
                  </> : "Sign in"}
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">Need help?</span>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
              Contact your system administrator for support
            </div>
          </div>
        </div>
      </div>
    </div>;
};