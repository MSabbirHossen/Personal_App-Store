/* stylelint-disable plugin/selector-bem-pattern */
import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const AppNotFound = () => {
  const appsData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const app = appsData.find((a) => a.id === parseInt(id));

  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-6xl sm:text-8xl mb-4 sm:mb-6">
        <img src="/App-Error.png" alt="Error illustration showing a broken or missing app icon against a blue and purple gradient background, conveying a calm but apologetic tone" />
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-900 text-center">
        App Not Found
      </h1>
      <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 text-center">
        The app you're looking for doesn't exist.
      </p>
      <button
        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        onClick={() => navigate("/apps")}
      >
        ← Back to Apps
      </button>
      </div>
    );
  }
  return <div></div>;
};

export default AppNotFound;
