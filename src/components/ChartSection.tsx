
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', visitors: 4000 },
  { month: 'Feb', visitors: 3000 },
  { month: 'Mar', visitors: 5000 },
  { month: 'Apr', visitors: 4500 },
  { month: 'May', visitors: 6000 },
  { month: 'Jun', visitors: 5500 },
  { month: 'Jul', visitors: 7000 },
  { month: 'Aug', visitors: 6500 },
  { month: 'Sep', visitors: 8000 },
  { month: 'Oct', visitors: 7500 },
  { month: 'Nov', visitors: 9000 },
  { month: 'Dec', visitors: 8500 },
];

const ChartSection: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 3 months');
  
  const periods = ['Last 3 months', 'Last 30 days', 'Last 7 days'];
  
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">Total Visitors</h3>
          <p className="text-gray-400 text-sm">Total for the last 3 months</p>
        </div>
        
        <div className="flex bg-gray-700 rounded-lg p-1">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
                selectedPeriod === period
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-600/50'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#3B82F6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorVisitors)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
