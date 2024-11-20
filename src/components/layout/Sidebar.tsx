import React from 'react';
import { Home, Book, Trophy, MessageSquare, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Book, label: 'Courses' },
    { icon: Trophy, label: 'Achievements' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="bg-white w-64 min-h-screen border-r">
      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                  item.active ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="ml-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
