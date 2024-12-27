import React from 'react';
import { X } from 'lucide-react';
import { RoadmapContent } from './RoadmapContent';

interface RoadmapModalProps {
  language: string;
  isOpen: boolean;
  onClose: () => void;
}

export function RoadmapModal({ language, isOpen, onClose }: RoadmapModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">{language} Learning Roadmap</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <RoadmapContent language={language} />
        </div>
      </div>
    </div>
  );
}