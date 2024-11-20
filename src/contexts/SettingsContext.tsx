import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Moon, Volume2, Globe, Book, Bell, Shield } from 'lucide-react';

export interface Setting {
  id: string;
  label: string;
  description: string;
  type: 'toggle' | 'select' | 'range';
  value: any;
  options?: string[];
  icon: React.ReactNode;
}

interface SettingsContextType {
  settings: Setting[];
  updateSetting: (id: string, value: any) => void;
  saveSettings: () => void;
  isDarkMode: boolean;
  soundEnabled: boolean;
  language: string;
  difficulty: string;
  notificationsEnabled: boolean;
  privacyMode: boolean;
}

const defaultSettings: Setting[] = [
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
];

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<Setting[]>(() => {
    try {
      const savedSettings = localStorage.getItem('aiTutorSettings');
      return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
    } catch (error) {
      console.error('Error loading settings:', error);
      return defaultSettings;
    }
  });

  useEffect(() => {
    // Apply dark mode
    const darkMode = getSetting('theme').value;
    document.documentElement.classList.toggle('dark', darkMode);
    document.body.style.backgroundColor = darkMode ? '#1a1a1a' : '#f9fafb';
  }, [settings]);

  const getSetting = (id: string): Setting => {
    const setting = settings.find(s => s.id === id);
    if (!setting) {
      const defaultSetting = defaultSettings.find(s => s.id === id);
      if (!defaultSetting) {
        throw new Error(`Setting with id "${id}" not found`);
      }
      return defaultSetting;
    }
    return setting;
  };

  const updateSetting = (id: string, value: any) => {
    setSettings(prevSettings => {
      const newSettings = prevSettings.map(setting =>
        setting.id === id ? { ...setting, value } : setting
      );
      // Save settings immediately after update
      try {
        localStorage.setItem('aiTutorSettings', JSON.stringify(newSettings));
      } catch (error) {
        console.error('Error saving settings:', error);
      }
      return newSettings;
    });
  };

  const saveSettings = () => {
    try {
      localStorage.setItem('aiTutorSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  const value: SettingsContextType = {
    settings,
    updateSetting,
    saveSettings,
    isDarkMode: getSetting('theme').value,
    soundEnabled: getSetting('sound').value,
    language: getSetting('language').value,
    difficulty: getSetting('difficulty').value,
    notificationsEnabled: getSetting('notifications').value,
    privacyMode: getSetting('privacy').value,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
