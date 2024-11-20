import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Moon, Sun, Volume2, VolumeX, Globe, Book, Bell, Shield, Check } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';
import type { Setting } from '../../contexts/SettingsContext';

const SettingsPage: React.FC = () => {
  const { settings, updateSetting, saveSettings } = useSettings();
  const [saveMessage, setSaveMessage] = useState('');
  const [savedSettings, setSavedSettings] = useState<Setting[]>([]);

  useEffect(() => {
    // Load saved settings on mount
    const saved = localStorage.getItem('aiTutorSettings');
    if (saved) {
      setSavedSettings(JSON.parse(saved));
    }
  }, []);

  const handleSettingChange = (id: string, newValue: any) => {
    updateSetting(id, newValue);
    // Show temporary save indicator
    setSaveMessage('Changes saved automatically');
    setTimeout(() => setSaveMessage(''), 2000);
  };

  const hasUnsavedChanges = () => {
    return JSON.stringify(settings) !== JSON.stringify(savedSettings);
  };

  const handleSave = () => {
    saveSettings();
    setSavedSettings(settings);
    setSaveMessage('All changes saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>
          <div className="flex items-center gap-4">
            <AnimatePresence>
              {saveMessage && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-2 text-green-600 dark:text-green-400"
                >
                  <Check className="h-4 w-4" />
                  {saveMessage}
                </motion.span>
              )}
            </AnimatePresence>
            {hasUnsavedChanges() && (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="h-5 w-5" />
                <span>Save All Changes</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-6">
          {settings.map((setting) => (
            <motion.div
              key={setting.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                {setting.icon}
              </div>
              
              <div className="flex-grow">
                <label className="block text-lg font-medium text-gray-900 dark:text-white">
                  {setting.label}
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {setting.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                {setting.type === 'toggle' ? (
                  <button
                    onClick={() => handleSettingChange(setting.id, !setting.value)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      setting.value ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                    role="switch"
                    aria-checked={setting.value}
                  >
                    <span className="sr-only">Toggle {setting.label}</span>
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition-transform ${
                        setting.value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                ) : setting.type === 'select' ? (
                  <select
                    value={setting.value}
                    onChange={(e) => handleSettingChange(setting.id, e.target.value)}
                    className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    {setting.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
