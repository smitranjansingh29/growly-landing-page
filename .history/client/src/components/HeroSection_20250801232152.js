import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Create High-Converting Ads in Seconds — Powered by AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          No design or copywriting needed. Just enter your product and let
          Growly do the rest.
        </p>
        <a
          href="#lead-form"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
        >
          Book Free Demo
        </a>
        <div className="mt-12">
          <img
            src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used-1024x683.jpg"
            alt="AI generating content"
            className="mx-auto w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
