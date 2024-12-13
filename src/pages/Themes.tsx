import React from "react";
import { useNavigate } from "react-router-dom";

const Themes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow bg-gray-100 w-full rounded-[24px] flex flex-col items-center justify-center text-center p-8">
      <div className="flex flex-col items-center">
        <div className="text-red-500 text-6xl mb-4">
          <span role="img" aria-label="construction">
            🚧
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          Page Under Maintenance
        </h1>
        <p className="text-gray-600 mt-4 max-w-md">
          We're currently improving this page to bring you a better experience.
          Please check back later. Thank you for your patience!
        </p>
        <button
          onClick={() => navigate("/")} // Navigate to the Themes page
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Go to Home
        </button>
      </div>
    </main>
  );
};

export default Themes;
