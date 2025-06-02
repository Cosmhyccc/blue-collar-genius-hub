
import React from 'react';
import { Home, BarChart3, FileText, Users, Folder, Database, TrendingUp, Bot, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  { name: 'Home', icon: Home, active: false },
  { name: 'Dashboard', icon: BarChart3, active: true },
  { name: 'Lifecycle', icon: TrendingUp, active: false },
  { name: 'Analytics', icon: BarChart3, active: false },
  { name: 'Projects', icon: Folder, active: false },
  { name: 'Team', icon: Users, active: false },
];

const documentsItems = [
  { name: 'Data Library', icon: Database, active: false },
  { name: 'Reports', icon: FileText, active: false },
  { name: 'AI Work Verification', icon: Bot, active: false },
];

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("w-64 bg-gray-900 text-gray-300 h-screen flex flex-col", className)}>
      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={cn(
              "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-white group",
              item.active && "bg-gray-800 text-white"
            )}
          >
            <item.icon className="mr-3 h-5 w-5 transition-colors" />
            {item.name}
          </a>
        ))}
        
        {/* Documents Section */}
        <div className="pt-6">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Documents
          </h3>
          {documentsItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-white group"
            >
              <item.icon className="mr-3 h-5 w-5 transition-colors" />
              {item.name}
            </a>
          ))}
        </div>
        
        {/* AI Assistant */}
        <div className="pt-6">
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-white group"
          >
            <div className="flex items-center">
              <Bot className="mr-3 h-5 w-5" />
              AI Assistant
            </div>
            <MoreHorizontal className="h-4 w-4" />
          </a>
        </div>
        
        {/* More */}
        <div className="pt-2">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-white"
          >
            <MoreHorizontal className="mr-3 h-5 w-5" />
            More
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
