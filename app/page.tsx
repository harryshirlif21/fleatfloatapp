"use client";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Home() {
  // Sample chart data (can be dynamic later)
  const shippingData = [
    { name: "Ships", value: 120 },
    { name: "Docked", value: 80 },
    { name: "In Transit", value: 50 },
    { name: "Containers", value: 2000 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header Section */}
      <section className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700">FleetFloat</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your all-in-one solution for managing shipping operations, tracking vessels, handling customs, and logistics in real time.
        </p>
      </section>

      {/* Image */}
      <div className="flex justify-center mb-10">
        <Image 
          src="/images/pexels-hormel-media-1095814.jpg" 
          alt="FleetFloat Shipping Management" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </div>
    
      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">📦 Operations</h3>
          <p className="text-gray-600">Track ships, docking schedules, TEU storage, and transportation in real-time.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">👷 Workforce</h3>
          <p className="text-gray-600">Manage workers, drivers, and their assigned tasks efficiently.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">💰 Finance</h3>
          <p className="text-gray-600">Handle invoicing, billing, and financial records seamlessly.</p>
        </div>
      </section>

      {/* Data Chart Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">📊 Shipping Operations Overview</h2>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={shippingData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <a href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-800">
          Get Started with FleetFloat
        </a>
      </div>
    </div>
  );
}

/*export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to FleetFloat</h1>
      <p className="mt-4 text-lg">
        Manage your shipping operations, workforce, and finances with ease.
      </p>
    </div>
  );
}
*/

/*import React from "react";

const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;*/


