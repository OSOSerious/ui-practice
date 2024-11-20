import React from 'react';
import { Home, BookOpen, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-8">
      <nav className="space-y-8">
        <button className="p-3 rounded-lg bg-indigo-50 text-indigo-600">
          <Home className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-50 transition-colors">
          <BookOpen className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-50 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-50 transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;