
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
  subtext?: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend,
  description,
  subtext,
  className
}) => {
  const isPositive = trend === 'up';
  
  return (
    <div className={cn(
      "bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className={cn(
          "flex items-center text-xs font-medium px-2 py-1 rounded-full",
          isPositive ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"
        )}>
          {isPositive ? (
            <TrendingUp className="w-3 h-3 mr-1" />
          ) : (
            <TrendingDown className="w-3 h-3 mr-1" />
          )}
          {change}
        </div>
      </div>
      
      <div className="mb-3">
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="flex items-center text-sm">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 mr-1 text-green-400" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1 text-red-400" />
          )}
          <span className="text-gray-300">{description}</span>
        </div>
      </div>
      
      {subtext && (
        <p className="text-gray-500 text-sm">{subtext}</p>
      )}
    </div>
  );
};

export default MetricCard;
