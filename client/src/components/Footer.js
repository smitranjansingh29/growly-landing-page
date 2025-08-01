import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Growly AI. All rights reserved.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
          Helping small businesses create better ads with AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
