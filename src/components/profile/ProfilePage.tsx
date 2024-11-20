import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Award,
  Star,
  Clock,
  BookOpen,
  TrendingUp,
  Edit2,
  Camera,
  Code,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
} from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';
import { useProfile } from '../../contexts/ProfileContext';
import ProfileEditForm from './ProfileEditForm';

const ProfilePage: React.FC = () => {
  const { settings } = useSettings();
  const { profile } = useProfile();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className={`${settings.darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg p-6`}>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img
                src={profile.avatar}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div className="text-center mb-6">
              <h2 className={`text-2xl font-bold ${settings.darkMode ? 'text-white' : 'text-gray-800'}`}>{profile.name}</h2>
              <p className={`${settings.darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{profile.email}</p>
            </div>

            <div className="space-y-4">
              <div className={`flex items-center space-x-3 ${settings.darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Phone className="w-5 h-5" />
                <span>{profile.phone || 'No phone number'}</span>
              </div>
              <div className={`flex items-center space-x-3 ${settings.darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <MapPin className="w-5 h-5" />
                <span>{profile.address || 'No address'}</span>
              </div>
              {profile.githubUsername && (
                <div className={`flex items-center space-x-3 ${settings.darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <Github className="w-5 h-5" />
                  <a
                    href={`https://github.com/${profile.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    {profile.githubUsername}
                  </a>
                </div>
              )}
              {profile.linkedinUrl && (
                <div className={`flex items-center space-x-3 ${settings.darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <Linkedin className="w-5 h-5" />
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              )}
              {profile.websiteUrl && (
                <div className={`flex items-center space-x-3 ${settings.darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <Globe className="w-5 h-5" />
                  <a
                    href={profile.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    Personal Website
                  </a>
                </div>
              )}
            </div>

            <div className="mt-6">
              <ProfileEditForm />
            </div>
          </div>
        </div>

        {/* Tech Stack and Social Media */}
        <div className="md:col-span-2 space-y-6">
          {/* Tech Stack */}
          <div className={`${settings.darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
            <h3 className={`text-xl font-bold ${settings.darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
              Tech Stack
            </h3>
            <div className="space-y-4">
              {profile.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center space-x-4 p-4 ${settings.darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}
                >
                  <div className={`p-2 ${settings.darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow`}>
                    <Code className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${settings.darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {tech.name}
                    </h4>
                    <p className={`text-sm ${settings.darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      {tech.level} • {tech.yearsOfExperience} years
                    </p>
                  </div>
                </motion.div>
              ))}
              {profile.techStack.length === 0 && (
                <p className={`text-center ${settings.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  No tech stack added yet. Click Edit Profile to add your skills.
                </p>
              )}
            </div>
          </div>

          {/* Social Media */}
          <div className={`${settings.darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
            <h3 className={`text-xl font-bold ${settings.darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
              Social Media
            </h3>
            <div className="space-y-4">
              {profile.socialMedia.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center space-x-4 p-4 ${settings.darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}
                >
                  <div className={`p-2 ${settings.darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow`}>
                    <Globe className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${settings.darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {social.platform}
                    </h4>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-600"
                    >
                      View Profile
                    </a>
                  </div>
                </motion.div>
              ))}
              {profile.socialMedia.length === 0 && (
                <p className={`text-center ${settings.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  No social media profiles added yet. Click Edit Profile to add your profiles.
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
