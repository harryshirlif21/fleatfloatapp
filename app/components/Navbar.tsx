"use client";
import Link from "next/link";
import { Settings } from "lucide-react"; // Import settings icon

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        FleetFloat
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/signup" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
        
        {/* Settings Icon */}
        <Link href="/settings" className="hover:text-gray-300">
          <Settings size={24} />
        </Link>
      </div>
    </nav>
  );
}

