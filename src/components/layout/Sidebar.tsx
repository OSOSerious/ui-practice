import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Award,
  Code,
  Settings,
  User,
  Layout,
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <Home className="w-5 h-5" />, label: 'Dashboard' },
    { path: '/courses', icon: <BookOpen className="w-5 h-5" />, label: 'Courses' },
    { path: '/achievements', icon: <Award className="w-5 h-5" />, label: 'Achievements' },
    { path: '/playground', icon: <Code className="w-5 h-5" />, label: 'Code Playground' },
    { path: '/profile', icon: <User className="w-5 h-5" />, label: 'Profile' },
    { path: '/settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen sticky top-0">
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <Layout className="w-6 h-6 text-blue-600" />
        <span className="font-semibold text-lg">AI Tutor</span>
      </div>
      
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
