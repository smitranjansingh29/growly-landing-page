import React from "react";
import { FiUpload, FiCpu, FiDownload } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiUpload className="w-8 h-8" />,
      title: "Input Your Product",
      description: "Simply describe your product or service in a few words.",
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "AI Magic",
      description:
        "Our AI generates multiple ad creatives with compelling copy and visuals.",
    },
    {
      icon: <FiDownload className="w-8 h-8" />,
      title: "Download & Use",
      description: "Download your ads and start running campaigns immediately.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 rounded-xl my-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          How Growly Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
