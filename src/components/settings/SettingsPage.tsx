import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Moon, Sun, Volume2, VolumeX, Globe, Book, Bell, Shield } from 'lucide-react';

interface Setting {
  id: string;
  label: string;
  description: string;
  type: 'toggle' | 'select' | 'range';
  value: any;
  options?: string[];
  icon: React.ReactNode;
}

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Setting[]>([
    {
      id: 'theme',
      label: 'Dark Mode',
      description: 'Toggle between light and dark theme',
      type: 'toggle',
      value: false,
      icon: <Moon className="h-5 w-5" />,
    },
    {
      id: 'sound',
      label: 'Sound Effects',
      description: 'Enable sound effects for interactions',
      type: 'toggle',
      value: true,
      icon: <Volume2 className="h-5 w-5" />,
    },
    {
      id: 'language',
      label: 'Language',
      description: 'Select your preferred language',
      type: 'select',
      value: 'English',
      options: ['English', 'Spanish', 'French', 'German', 'Chinese'],
      icon: <Globe className="h-5 w-5" />,
    },
    {
      id: 'difficulty',
      label: 'Learning Difficulty',
      description: 'Adjust the complexity of learning materials',
      type: 'select',
      value: 'Intermediate',
      options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      icon: <Book className="h-5 w-5" />,
    },
    {
      id: 'notifications',
      label: 'Notifications',
      description: 'Receive updates about new content and achievements',
      type: 'toggle',
      value: true,
      icon: <Bell className="h-5 w-5" />,
    },
    {
      id: 'privacy',
      label: 'Privacy Mode',
      description: 'Enhanced privacy for your learning sessions',
      type: 'toggle',
      value: false,
      icon: <Shield className="h-5 w-5" />,
    },
  ]);

  const handleSettingChange = (id: string, newValue: any) => {
    setSettings(settings.map(setting => 
      setting.id === id ? { ...setting, value: newValue } : setting
    ));
  };

  const handleSave = () => {
    // Save settings to localStorage
    localStorage.setItem('aiTutorSettings', JSON.stringify(settings));
    // Show success message
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Save className="h-5 w-5" />
            <span>Save Changes</span>
          </button>
        </div>

        <div className="space-y-6">
          {settings.map((setting) => (
            <motion.div
              key={setting.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                {setting.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{setting.label}</h3>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>

                  {setting.type === 'toggle' && (
                    <button
                      onClick={() => handleSettingChange(setting.id, !setting.value)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        setting.value ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          setting.value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  )}

                  {setting.type === 'select' && (
                    <select
                      value={setting.value}
                      onChange={(e) => handleSettingChange(setting.id, e.target.value)}
                      className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      {setting.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
