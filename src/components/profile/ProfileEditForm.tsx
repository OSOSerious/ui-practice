import React, { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';
import { useSettings } from '../../contexts/SettingsContext';
import { Plus, Minus, Save, X } from 'lucide-react';

const ProfileEditForm: React.FC = () => {
  const { profile, updateProfile, updateTechStack, updateSocialMedia } = useProfile();
  const { settings } = useSettings();
  const [isEditing, setIsEditing] = useState(false);

  const [techStack, setTechStack] = useState(profile.techStack);
  const [socialMedia, setSocialMedia] = useState(profile.socialMedia);

  const handleAddTechStack = () => {
    setTechStack([
      ...techStack,
      { name: '', level: 'Beginner', yearsOfExperience: 0 },
    ]);
  };

  const handleRemoveTechStack = (index: number) => {
    setTechStack(techStack.filter((_, i) => i !== index));
  };

  const handleTechStackChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const newTechStack = [...techStack];
    newTechStack[index] = { ...newTechStack[index], [field]: value };
    setTechStack(newTechStack);
  };

  const handleAddSocialMedia = () => {
    setSocialMedia([...socialMedia, { platform: '', url: '' }]);
  };

  const handleRemoveSocialMedia = (index: number) => {
    setSocialMedia(socialMedia.filter((_, i) => i !== index));
  };

  const handleSocialMediaChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newSocialMedia = [...socialMedia];
    newSocialMedia[index] = { ...newSocialMedia[index], [field]: value };
    setSocialMedia(newSocialMedia);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newProfile = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      bio: formData.get('bio') as string,
      githubUsername: formData.get('githubUsername') as string,
      linkedinUrl: formData.get('linkedinUrl') as string,
      websiteUrl: formData.get('websiteUrl') as string,
    };

    updateProfile(newProfile);
    updateTechStack(techStack);
    updateSocialMedia(socialMedia);
    setIsEditing(false);
  };

  const inputClassName = `w-full p-2 rounded-md border ${
    settings.darkMode
      ? 'bg-gray-700 border-gray-600 text-white'
      : 'bg-white border-gray-300 text-gray-900'
  }`;

  const buttonClassName = `px-4 py-2 rounded-md font-medium transition-colors ${
    settings.darkMode
      ? 'bg-blue-600 hover:bg-blue-700 text-white'
      : 'bg-blue-500 hover:bg-blue-600 text-white'
  }`;

  const secondaryButtonClassName = `px-3 py-1 rounded-md font-medium transition-colors ${
    settings.darkMode
      ? 'bg-gray-600 hover:bg-gray-700 text-white'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
  }`;

  if (!isEditing) {
    return (
      <button
        className={buttonClassName}
        onClick={() => setIsEditing(true)}
      >
        Edit Profile
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={profile.name}
            className={inputClassName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={profile.email}
            className={inputClassName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            defaultValue={profile.phone}
            className={inputClassName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            defaultValue={profile.address}
            className={inputClassName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            defaultValue={profile.bio}
            rows={4}
            className={inputClassName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">GitHub Username</label>
          <input
            type="text"
            name="githubUsername"
            defaultValue={profile.githubUsername}
            className={inputClassName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
          <input
            type="url"
            name="linkedinUrl"
            defaultValue={profile.linkedinUrl}
            className={inputClassName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Website URL</label>
          <input
            type="url"
            name="websiteUrl"
            defaultValue={profile.websiteUrl}
            className={inputClassName}
          />
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-lg font-medium">Tech Stack</label>
            <button
              type="button"
              onClick={handleAddTechStack}
              className={secondaryButtonClassName}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          {techStack.map((tech, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={tech.name}
                  onChange={(e) =>
                    handleTechStackChange(index, 'name', e.target.value)
                  }
                  placeholder="Technology name"
                  className={inputClassName}
                />
                <select
                  value={tech.level}
                  onChange={(e) =>
                    handleTechStackChange(index, 'level', e.target.value)
                  }
                  className={inputClassName}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
                <input
                  type="number"
                  value={tech.yearsOfExperience}
                  onChange={(e) =>
                    handleTechStackChange(
                      index,
                      'yearsOfExperience',
                      parseInt(e.target.value)
                    )
                  }
                  placeholder="Years of experience"
                  className={inputClassName}
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveTechStack(index)}
                className="mt-2"
              >
                <Minus className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-lg font-medium">Social Media</label>
            <button
              type="button"
              onClick={handleAddSocialMedia}
              className={secondaryButtonClassName}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          {socialMedia.map((social, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={social.platform}
                  onChange={(e) =>
                    handleSocialMediaChange(index, 'platform', e.target.value)
                  }
                  placeholder="Platform name"
                  className={inputClassName}
                />
                <input
                  type="url"
                  value={social.url}
                  onChange={(e) =>
                    handleSocialMediaChange(index, 'url', e.target.value)
                  }
                  placeholder="Profile URL"
                  className={inputClassName}
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveSocialMedia(index)}
                className="mt-2"
              >
                <Minus className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className={`${secondaryButtonClassName} flex items-center gap-2`}
        >
          <X className="w-4 h-4" /> Cancel
        </button>
        <button
          type="submit"
          className={`${buttonClassName} flex items-center gap-2`}
        >
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileEditForm;
