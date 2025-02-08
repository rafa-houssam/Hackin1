"use client";
import { useState } from "react";
import { Bell, Lock, User, LogOut } from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg space-y-6">
        {/* Profile Settings */}
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <User className="text-blue-500" size={20} />
            Profile Settings
          </h2>
          <p className="text-gray-600 text-sm">Update your personal details.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
            Edit Profile
          </button>
        </div>

        {/* Notification Settings */}
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Bell className="text-yellow-500" size={20} />
            Notifications
          </h2>
          <p className="text-gray-600 text-sm">Manage your notification preferences.</p>
          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5"
            />
            Enable Notifications
          </label>
        </div>

        {/* Account Security */}
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Lock className="text-red-500" size={20} />
            Account Security
          </h2>
          <p className="text-gray-600 text-sm">Change your password or enable 2FA.</p>
          <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600">
            Change Password
          </button>
        </div>

        {/* Logout Button */}
        <button className="flex items-center gap-2 w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
