import React from 'react';
import { X, Youtube } from 'lucide-react';
import { learningResources } from '../../utils/learningResources';

interface YouTubeModalProps {
  language: string;
  isOpen: boolean;
  onClose: () => void;
}

export function YouTubeModal({ language, isOpen, onClose }: YouTubeModalProps) {
  if (!isOpen) return null;

  const resources = learningResources[language]?.youtube || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Youtube className="text-red-600" />
            <span>{language} YouTube Resources</span>
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Youtube className="h-6 w-6 text-red-600" />
                  <span className="font-medium">{resource.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}