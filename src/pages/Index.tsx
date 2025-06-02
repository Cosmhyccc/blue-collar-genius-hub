
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import MetricCard from '@/components/MetricCard';
import ChartSection from '@/components/ChartSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Revenue"
              value="$1,250.00"
              change="+12.5%"
              trend="up"
              description="Trending up this month"
              subtext="Visitors for the last 6 months"
            />
            
            <MetricCard
              title="New Customers"
              value="1,234"
              change="-2.0%"
              trend="down"
              description="Down 20% this period"
              subtext="Acquisition needs attention"
            />
            
            <MetricCard
              title="Active Accounts"
              value="45,678"
              change="+12.5%"
              trend="up"
              description="Strong user retention"
              subtext="Engagement exceed targets"
            />
            
            <MetricCard
              title="Growth Rate"
              value="4.5%"
              change="+4.5%"
              trend="up"
              description="Steady performance increase"
              subtext="Meets growth projections"
            />
          </div>
          
          {/* Chart Section */}
          <div className="mb-8">
            <ChartSection />
          </div>
          
          {/* AI Tools Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">AI Invoice Generator</h3>
              <p className="text-blue-100 text-sm mb-4">Automatically generate professional invoices from job details and photos.</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                Create Invoice
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">AI Work Verification</h3>
              <p className="text-green-100 text-sm mb-4">Verify technician work quality with before/after image analysis.</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                Verify Work
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">AI Quote Generator</h3>
              <p className="text-purple-100 text-sm mb-4">Generate accurate quotes based on job requirements and materials.</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                Generate Quote
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
