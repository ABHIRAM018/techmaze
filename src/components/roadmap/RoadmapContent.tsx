import React from 'react';
import { getRoadmapData } from '../../utils/roadmapData';

interface RoadmapContentProps {
  language: string;
}

export function RoadmapContent({ language }: RoadmapContentProps) {
  const roadmapData = getRoadmapData(language);

  return (
    <div className="space-y-8">
      {roadmapData.map((section, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {section.title}
          </h3>
          <div className="pl-4 space-y-2">
            {section.topics.map((topic, topicIndex) => (
              <div key={topicIndex} className="flex items-start space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-700">{topic.name}</h4>
                  {topic.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {topic.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}