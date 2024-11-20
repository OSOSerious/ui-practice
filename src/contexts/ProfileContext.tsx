import React, { createContext, useContext, useState, useEffect } from 'react';

interface SocialMedia {
  platform: string;
  url: string;
}

interface TechStack {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience: number;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
  avatar: string;
  techStack: TechStack[];
  resume: string;
  socialMedia: SocialMedia[];
  githubUsername?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
}

interface ProfileContextType {
  profile: UserProfile;
  updateProfile: (newProfile: Partial<UserProfile>) => void;
  updateTechStack: (techStack: TechStack[]) => void;
  updateSocialMedia: (socialMedia: SocialMedia[]) => void;
  isLoading: boolean;
}

const defaultProfile: UserProfile = {
  name: '',
  email: '',
  phone: '',
  address: '',
  bio: '',
  avatar: 'https://via.placeholder.com/128',
  techStack: [],
  resume: '',
  socialMedia: [],
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (newProfile: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...newProfile }));
  };

  const updateTechStack = (techStack: TechStack[]) => {
    setProfile(prev => ({ ...prev, techStack }));
  };

  const updateSocialMedia = (socialMedia: SocialMedia[]) => {
    setProfile(prev => ({ ...prev, socialMedia }));
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        updateTechStack,
        updateSocialMedia,
        isLoading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
