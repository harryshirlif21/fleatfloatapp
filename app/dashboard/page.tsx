"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-blue-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Operations Section */}
        <Link href="/dashboard/operations" className="bg-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-800">
          <h2 className="text-xl font-semibold">Operations</h2>
          <p>Manage ships, docking, storage, and transport.</p>
        </Link>

        {/* Workforce Section */}
        <Link href="/dashboard/workforce" className="bg-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-800">
          <h2 className="text-xl font-semibold">Workforce</h2>
          <p>Manage workers and their tasks.</p>
        </Link>

        {/* Finance Section */}
        <Link href="/dashboard/finance" className="bg-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-800">
          <h2 className="text-xl font-semibold">Finance</h2>
          <p>Manage financial records and transactions.</p>
        </Link>

        {/* Reports Section */}
        <Link href="/dashboard/reports" className="bg-blue-700 p-6 rounded-lg shadow-lg hover:bg-blue-800">
          <h2 className="text-xl font-semibold">Reports</h2>
          <p>Generate and view reports.</p>
        </Link>
      </div>
    </div>
  );
}
