import React from "react";
import { FiLayers, FiTrendingUp, FiCode } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "AI Creative Generator",
      description:
        "Automatically generates multiple ad variations with images and copy.",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Headline Optimizer",
      description:
        "Uses machine learning to create the most engaging headlines.",
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Export Ad Formats",
      description:
        "Directly export ads in formats for Meta, Google, and other platforms.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg">
              <div className="text-primary dark:text-primary-light mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
